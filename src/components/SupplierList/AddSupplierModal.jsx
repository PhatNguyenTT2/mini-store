import React, { useEffect, useState } from 'react'
import supplierService from '../../services/supplierService'

export const AddSupplierModal = ({ isOpen, onClose, onSuccess }) => {
  const [formData, setFormData] = useState({
    companyName: '',
    email: '',
    phone: '',
    street: '',
    city: '',
    bankName: '',
    accountNumber: '',
    paymentTerms: 'net30',
    creditLimit: '0',
    currentDebt: '0',
    notes: ''
  })

  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  useEffect(() => {
    if (isOpen) {
      setFormData({
        companyName: '',
        email: '',
        phone: '',
        street: '',
        city: '',
        bankName: '',
        accountNumber: '',
        paymentTerms: 'net30',
        creditLimit: '0',
        currentDebt: '0',
        notes: ''
      })
      setError(null)
    }
  }, [isOpen])

  const handleChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (!formData.companyName.trim()) {
      setError('Name is required')
      return
    }

    if (!formData.email.trim()) {
      setError('Email is required')
      return
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(formData.email.trim())) {
      setError('Invalid email format')
      return
    }

    if (!formData.phone.trim()) {
      setError('Phone number is required')
      return
    }

    const phoneRegex = /^[\d\s\-\+\(\)]+$/
    if (!phoneRegex.test(formData.phone.trim())) {
      setError('Invalid phone number format')
      return
    }

    const parsedCreditLimit = Number(formData.creditLimit)
    const parsedCurrentDebt = Number(formData.currentDebt)

    if (Number.isNaN(parsedCreditLimit) || parsedCreditLimit < 0) {
      setError('Credit limit must be a non-negative number')
      return
    }

    if (Number.isNaN(parsedCurrentDebt) || parsedCurrentDebt < 0) {
      setError('Current debt must be a non-negative number')
      return
    }

    if (parsedCurrentDebt > parsedCreditLimit) {
      setError('Current debt cannot exceed credit limit')
      return
    }

    setLoading(true)
    setError(null)

    try {
      const payload = {
        companyName: formData.companyName.trim(),
        email: formData.email.trim(),
        phone: formData.phone.trim(),
        paymentTerms: formData.paymentTerms,
        creditLimit: parsedCreditLimit,
        currentDebt: parsedCurrentDebt
      }

      if (formData.street.trim() || formData.city.trim()) {
        payload.address = {
          street: formData.street.trim() || '',
          city: formData.city.trim() || ''
        }
      }

      if (formData.bankName.trim() || formData.accountNumber.trim()) {
        payload.bankAccount = {
          bankName: formData.bankName.trim() || '',
          accountNumber: formData.accountNumber.trim() || ''
        }
      }

      if (formData.notes.trim()) {
        payload.notes = formData.notes.trim()
      }

      const created = await supplierService.createSupplier(payload)
      if (onSuccess) onSuccess(created)
      onClose && onClose()
    } catch (err) {
      console.error('Error creating supplier:', err)
      setError(
        err.response?.data?.error || err.error || err.message || 'Failed to create supplier. Please try again.'
      )
    } finally {
      setLoading(false)
    }
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-[10000]">
      <div className="bg-white rounded-lg shadow-xl w-full max-w-3xl max-h[90vh] overflow-y-auto">
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <h2 className="text-[20px] font-semibold font-['Poppins',sans-serif] text-[#212529]">Add Supplier</h2>
          <button
            onClick={onClose}
            disabled={loading}
            className="text-gray-400 hover:text-gray-600 disabled:opacity-50"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-6 space-y-6">
          {error && (
            <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg text-[13px]">
              {error}
            </div>
          )}

          <div>
            <label className="block text-[13px] font-medium font-['Poppins',sans-serif] text-[#212529] mb-2">
              Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              value={formData.companyName}
              onChange={(e) => handleChange('companyName', e.target.value)}
              placeholder="Supplier name"
              required
              maxLength={255}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg text-[13px] font-['Poppins',sans-serif] focus:outline-none focus:ring-2 focus:ring-emerald-500"
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-[13px] font-medium font-['Poppins',sans-serif] text-[#212529] mb-2">
                Email <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                value={formData.email}
                onChange={(e) => handleChange('email', e.target.value)}
                placeholder="supplier@example.com"
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-lg text-[13px] font-['Poppins',sans-serif] focus:outline-none focus:ring-2 focus:ring-emerald-500"
              />
            </div>
            <div>
              <label className="block text-[13px] font-medium font-['Poppins',sans-serif] text-[#212529] mb-2">
                Phone <span className="text-red-500">*</span>
              </label>
              <input
                type="tel"
                value={formData.phone}
                onChange={(e) => handleChange('phone', e.target.value)}
                placeholder="(123) 456-7890"
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-lg text-[13px] font-['Poppins',sans-serif] focus:outline-none focus:ring-2 focus:ring-emerald-500"
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-[13px] font-medium font-['Poppins',sans-serif] text-[#212529] mb-2">Street (Optional)</label>
              <input
                type="text"
                value={formData.street}
                onChange={(e) => handleChange('street', e.target.value)}
                placeholder="123 Main Street"
                maxLength={255}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg text-[13px] font-['Poppins',sans-serif] focus:outline-none focus:ring-2 focus:ring-emerald-500"
              />
            </div>
            <div>
              <label className="block text-[13px] font-medium font-['Poppins',sans-serif] text-[#212529] mb-2">City (Optional)</label>
              <input
                type="text"
                value={formData.city}
                onChange={(e) => handleChange('city', e.target.value)}
                placeholder="Ho Chi Minh"
                maxLength={100}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg text-[13px] font-['Poppins',sans-serif] focus:outline-none focus:ring-2 focus:ring-emerald-500"
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-[13px] font-medium font-['Poppins',sans-serif] text-[#212529] mb-2">Bank Name</label>
              <input
                type="text"
                value={formData.bankName}
                onChange={(e) => handleChange('bankName', e.target.value)}
                placeholder="Vietcombank"
                maxLength={255}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg text-[13px] font-['Poppins',sans-serif] focus:outline-none focus:ring-2 focus:ring-emerald-500"
              />
            </div>
            <div>
              <label className="block text-[13px] font-medium font-['Poppins',sans-serif] text-[#212529] mb-2">Account Number</label>
              <input
                type="text"
                value={formData.accountNumber}
                onChange={(e) => handleChange('accountNumber', e.target.value)}
                placeholder="0123456789"
                maxLength={50}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg text-[13px] font-['Poppins',sans-serif] focus:outline-none focus:ring-2 focus:ring-emerald-500"
              />
            </div>
          </div>

          <div className="grid grid-cols-3 gap-4">
            <div>
              <label className="block text-[13px] font-medium font-['Poppins',sans-serif] text-[#212529] mb-2">Term</label>
              <select
                value={formData.paymentTerms}
                onChange={(e) => handleChange('paymentTerms', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg text-[13px] font-['Poppins',sans-serif] focus:outline-none focus:ring-2 focus:ring-emerald-500"
              >
                <option value="cod">Cash on Delivery (COD)</option>
                <option value="net15">Net 15</option>
                <option value="net30">Net 30</option>
                <option value="net60">Net 60</option>
                <option value="net90">Net 90</option>
              </select>
            </div>
            <div>
              <label className="block text-[13px] font-medium font-['Poppins',sans-serif] text-[#212529] mb-2">Credit Limit</label>
              <input
                type="number"
                min="0"
                step="0.01"
                value={formData.creditLimit}
                onChange={(e) => handleChange('creditLimit', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg text-[13px] font-['Poppins',sans-serif] focus:outline-none focus:ring-2 focus:ring-emerald-500"
              />
            </div>
            <div>
              <label className="block text-[13px] font-medium font-['Poppins',sans-serif] text-[#212529] mb-2">Current Debt</label>
              <input
                type="number"
                min="0"
                step="0.01"
                value={formData.currentDebt}
                onChange={(e) => handleChange('currentDebt', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg text-[13px] font-['Poppins',sans-serif] focus:outline-none focus:ring-2 focus:ring-emerald-500"
              />
            </div>
          </div>

          {/* Notes (Optional) */}
          <div>
            <label className="block text-[13px] font-medium font-['Poppins',sans-serif] text-[#212529] mb-2">
              Notes (Optional)
            </label>
            <textarea
              value={formData.notes}
              onChange={(e) => handleChange('notes', e.target.value)}
              placeholder="Additional notes about the supplier (optional)"
              rows={4}
              maxLength={1000}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg text-[13px] font-['Poppins',sans-serif] focus:outline-none focus:ring-2 focus:ring-emerald-500 resize-none"
            />
            <div className="flex items-center justify-between mt-1">
              <p className="text-[11px] text-gray-500 font-['Poppins',sans-serif]">
                Maximum 1000 characters
              </p>
              <p className="text-[11px] text-gray-500 font-['Poppins',sans-serif]">
                {formData.notes.length}/1000
              </p>
            </div>
          </div>

          <div className="flex items-center justify-end gap-3 pt-4 border-t">
            <button
              type="button"
              onClick={onClose}
              disabled={loading}
              className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 text-[13px] font-['Poppins',sans-serif] font-medium disabled:opacity-50"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={loading}
              className="px-4 py-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 text-[13px] font-['Poppins',sans-serif] font-medium disabled:opacity-50 flex items-center gap-2"
            >
              {loading ? (
                <>
                  <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                  </svg>
                  Creating...
                </>
              ) : (
                'Create Supplier'
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}


