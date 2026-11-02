import React, { useState } from 'react';
import { CheckCircle2, MessageSquare, Mail, Phone, Sparkles, AlertCircle } from 'lucide-react';
import { Button } from '../common/Button';
import { useLanguage } from '../../context/LanguageContext';
import { CONTACT_CONFIG } from '../../config/contact';
import type { ContactMethod, ProjectType, ProjectInquiryForm } from '../../types';

export const InquiryForm: React.FC = () => {
  const { t, language } = useLanguage();

  const [formData, setFormData] = useState<ProjectInquiryForm>({
    name: '',
    email: '',
    phone: '',
    contactMethod: 'whatsapp',
    projectType: 'web',
    budget: '',
    details: '',
  });

  // Honeypot spam trap
  const [honeypot, setHoneypot] = useState('');

  const [errors, setErrors] = useState<Partial<Record<keyof ProjectInquiryForm, string>>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedAction, setSubmittedAction] = useState<{
    method: ContactMethod;
    url: string;
    messageText: string;
  } | null>(null);

  const validate = (): boolean => {
    const newErrors: Partial<Record<keyof ProjectInquiryForm, string>> = {};

    if (!formData.name.trim()) {
      newErrors.name = t.contact.errors.nameRequired;
    } else if (formData.name.trim().length < 2) {
      newErrors.name = t.contact.errors.nameMin;
    }

    if (!formData.phone.trim()) {
      newErrors.phone = t.contact.errors.phoneRequired;
    } else if (formData.phone.trim().length < 7) {
      newErrors.phone = t.contact.errors.phoneInvalid;
    }

    if (formData.email.trim()) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.email.trim())) {
        newErrors.email = t.contact.errors.emailInvalid;
      }
    }

    if (!formData.details.trim()) {
      newErrors.details = t.contact.errors.detailsRequired;
    } else if (formData.details.trim().length < 15) {
      newErrors.details = t.contact.errors.detailsMin;
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Spam bot check
    if (honeypot) {
      return;
    }

    if (!validate()) {
      return;
    }

    setIsSubmitting(true);

    const projectTypeLabel = t.contact.projectTypes[formData.projectType];
    const budgetLabel = formData.budget || (language === 'ar' ? 'غير محدد' : 'Not specified');

    // Build structured inquiry text
    let summaryText = '';
    if (language === 'ar') {
      summaryText = `مرحباً فريق DevIQ،\nأود الاستفسار عن مشروع برمجي جديد:\n\n` +
        `• الاسم: ${formData.name}\n` +
        `• رقم التواصل: ${formData.phone}\n` +
        (formData.email ? `• البريد الإلكتروني: ${formData.email}\n` : '') +
        `• وسيلة التواصل المفضلة: ${formData.contactMethod === 'whatsapp' ? 'واتساب' : formData.contactMethod === 'email' ? 'البريد الإلكتروني' : 'اتصال هاتفي'}\n` +
        `• نوع المشروع: ${projectTypeLabel}\n` +
        `• الميزانية التقريبية: ${budgetLabel}\n\n` +
        `• تفاصيل وفكرة المشروع:\n${formData.details}\n\n` +
        `شكراً لكم.`;
    } else {
      summaryText = `Hello DevIQ Team,\nI would like to inquire about a new software project:\n\n` +
        `• Name: ${formData.name}\n` +
        `• Phone / WhatsApp: ${formData.phone}\n` +
        (formData.email ? `• Email: ${formData.email}\n` : '') +
        `• Preferred Contact: ${formData.contactMethod}\n` +
        `• Project Type: ${projectTypeLabel}\n` +
        `• Approximate Budget: ${budgetLabel}\n\n` +
        `• Project Details & Vision:\n${formData.details}\n\n` +
        `Best regards.`;
    }

    let targetUrl = '';
    if (formData.contactMethod === 'whatsapp' || formData.contactMethod === 'phone') {
      const cleanPhone = CONTACT_CONFIG.whatsappNumber.replace(/[^0-9]/g, '');
      targetUrl = `https://wa.me/${cleanPhone}?text=${encodeURIComponent(summaryText)}`;
    } else {
      const subject = encodeURIComponent(
        language === 'ar'
          ? `طلب مشروع جديد: ${formData.name} - ${projectTypeLabel}`
          : `New Project Inquiry: ${formData.name} - ${projectTypeLabel}`
      );
      targetUrl = `mailto:${CONTACT_CONFIG.contactEmail}?subject=${subject}&body=${encodeURIComponent(summaryText)}`;
    }

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmittedAction({
        method: formData.contactMethod,
        url: targetUrl,
        messageText: summaryText,
      });

      // Automatically launch target window
      window.open(targetUrl, '_blank', 'noopener,noreferrer');
    }, 600);
  };

  const resetForm = () => {
    setFormData({
      name: '',
      email: '',
      phone: '',
      contactMethod: 'whatsapp',
      projectType: 'web',
      budget: '',
      details: '',
    });
    setErrors({});
    setSubmittedAction(null);
  };

  if (submittedAction) {
    return (
      <div className="p-8 sm:p-10 rounded-2xl bg-white border border-teal-300 shadow-xl shadow-teal-900/5 text-center animate-in fade-in duration-300">
        <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-teal-50 text-teal-700 flex items-center justify-center border border-teal-200 shadow-2xs">
          <CheckCircle2 className="w-8 h-8" />
        </div>

        <h3 className="text-xl sm:text-2xl font-black text-slate-950 mb-2">
          {submittedAction.method === 'whatsapp'
            ? t.contact.form.successWhatsappTitle
            : t.contact.form.successEmailTitle}
        </h3>

        <p className="text-sm text-slate-800 max-w-lg mx-auto mb-6 leading-relaxed font-medium">
          {submittedAction.method === 'whatsapp'
            ? t.contact.form.successWhatsappDesc
            : t.contact.form.successEmailDesc}
        </p>

        {/* Pre-formatted message preview container */}
        <div className="text-start p-4 mb-6 rounded-xl bg-[#f7f6f2] border border-[#e5e3dc] text-xs font-mono text-slate-900 whitespace-pre-wrap max-h-48 overflow-y-auto font-medium">
          {submittedAction.messageText}
        </div>

        <div className="flex flex-wrap items-center justify-center gap-3">
          <a
            href={submittedAction.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-slate-950 text-white font-bold text-sm shadow-md hover:bg-slate-800"
          >
            {submittedAction.method === 'whatsapp' ? (
              <>
                <MessageSquare className="w-4 h-4" />
                <span>{t.contact.form.openWhatsappBtn}</span>
              </>
            ) : (
              <>
                <Mail className="w-4 h-4" />
                <span>{t.contact.form.openEmailBtn}</span>
              </>
            )}
          </a>

          <Button variant="ghost" onClick={resetForm} size="md">
            {t.contact.form.resetForm}
          </Button>
        </div>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="p-6 sm:p-8 rounded-2xl bg-white border border-[#e5e3dc] shadow-md backdrop-blur-md"
    >
      {/* Honeypot hidden input for spam protection */}
      <input
        type="text"
        name="website_hp"
        value={honeypot}
        onChange={(e) => setHoneypot(e.target.value)}
        className="hidden"
        tabIndex={-1}
        autoComplete="off"
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
        {/* Full Name */}
        <div>
          <label htmlFor="name" className="block text-xs font-black text-slate-950 mb-2">
            {t.contact.form.nameLabel}
          </label>
          <input
            id="name"
            type="text"
            required
            placeholder={t.contact.form.namePlaceholder}
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className={`w-full px-4 py-2.5 rounded-xl bg-[#faf9f6] border text-slate-950 text-sm font-medium focus:outline-none focus:bg-white focus:border-teal-600 transition-all ${
              errors.name ? 'border-rose-400 focus:border-rose-500' : 'border-[#d8d5cd]'
            }`}
          />
          {errors.name && (
            <p className="mt-1.5 text-xs text-rose-700 flex items-center gap-1 font-bold">
              <AlertCircle className="w-3.5 h-3.5 shrink-0" />
              <span>{errors.name}</span>
            </p>
          )}
        </div>

        {/* Phone / WhatsApp */}
        <div>
          <label htmlFor="phone" className="block text-xs font-black text-slate-950 mb-2">
            {t.contact.form.phoneLabel}
          </label>
          <input
            id="phone"
            type="tel"
            required
            placeholder={t.contact.form.phonePlaceholder}
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            className={`w-full px-4 py-2.5 rounded-xl bg-[#faf9f6] border text-slate-950 text-sm font-medium focus:outline-none focus:bg-white focus:border-teal-600 transition-all ${
              errors.phone ? 'border-rose-400 focus:border-rose-500' : 'border-[#d8d5cd]'
            }`}
          />
          {errors.phone && (
            <p className="mt-1.5 text-xs text-rose-700 flex items-center gap-1 font-bold">
              <AlertCircle className="w-3.5 h-3.5 shrink-0" />
              <span>{errors.phone}</span>
            </p>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
        {/* Email (Optional) */}
        <div>
          <label htmlFor="email" className="block text-xs font-black text-slate-950 mb-2">
            {t.contact.form.emailLabel}
          </label>
          <input
            id="email"
            type="email"
            placeholder={t.contact.form.emailPlaceholder}
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className={`w-full px-4 py-2.5 rounded-xl bg-[#faf9f6] border text-slate-950 text-sm font-medium focus:outline-none focus:bg-white focus:border-teal-600 transition-all ${
              errors.email ? 'border-rose-400 focus:border-rose-500' : 'border-[#d8d5cd]'
            }`}
          />
          {errors.email && (
            <p className="mt-1.5 text-xs text-rose-700 flex items-center gap-1 font-bold">
              <AlertCircle className="w-3.5 h-3.5 shrink-0" />
              <span>{errors.email}</span>
            </p>
          )}
        </div>

        {/* Preferred Contact Method */}
        <div>
          <label htmlFor="contactMethod" className="block text-xs font-black text-slate-950 mb-2">
            {t.contact.form.methodLabel}
          </label>
          <select
            id="contactMethod"
            value={formData.contactMethod}
            onChange={(e) =>
              setFormData({ ...formData, contactMethod: e.target.value as ContactMethod })
            }
            className="w-full px-4 py-2.5 rounded-xl bg-[#faf9f6] border border-[#d8d5cd] text-slate-950 text-sm font-bold focus:outline-none focus:bg-white focus:border-teal-600"
          >
            <option value="whatsapp">{t.contact.form.methodWhatsapp}</option>
            <option value="email">{t.contact.form.methodEmail}</option>
            <option value="phone">{t.contact.form.methodPhone}</option>
          </select>
        </div>
      </div>

      {/* Project Type Selection */}
      <div className="mb-5">
        <label className="block text-xs font-black text-slate-950 mb-2.5">
          {t.contact.form.typeLabel}
        </label>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
          {(['web', 'mobile', 'desktop', 'ai', 'other'] as ProjectType[]).map((type) => {
            const isSelected = formData.projectType === type;
            return (
              <button
                key={type}
                type="button"
                onClick={() => setFormData({ ...formData, projectType: type })}
                className={`px-3 py-2.5 rounded-xl text-xs font-bold border transition-all text-start flex items-center justify-between cursor-pointer ${
                  isSelected
                    ? 'bg-teal-50 border-teal-600 text-teal-950 shadow-2xs'
                    : 'bg-[#faf9f6] border-[#d8d5cd] text-slate-900 hover:text-slate-950 hover:border-slate-400 hover:bg-[#f1efe9]'
                }`}
              >
                <span>{t.contact.projectTypes[type]}</span>
                {isSelected && <Sparkles className="w-3.5 h-3.5 text-teal-700 shrink-0 ms-1" />}
              </button>
            );
          })}
        </div>
      </div>

      {/* Approximate Budget (Optional) */}
      <div className="mb-5">
        <label htmlFor="budget" className="block text-xs font-black text-slate-950 mb-2">
          {t.contact.form.budgetLabel}
        </label>
        <select
          id="budget"
          value={formData.budget}
          onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
          className="w-full px-4 py-2.5 rounded-xl bg-[#faf9f6] border border-[#d8d5cd] text-slate-950 text-sm font-bold focus:outline-none focus:bg-white focus:border-teal-600"
        >
          <option value="">{t.contact.form.budgetPlaceholder}</option>
          {t.contact.budgets.map((b) => (
            <option key={b} value={b}>
              {b}
            </option>
          ))}
        </select>
      </div>

      {/* Project Details */}
      <div className="mb-6">
        <label htmlFor="details" className="block text-xs font-black text-slate-950 mb-2">
          {t.contact.form.detailsLabel}
        </label>
        <textarea
          id="details"
          required
          rows={4}
          placeholder={t.contact.form.detailsPlaceholder}
          value={formData.details}
          onChange={(e) => setFormData({ ...formData, details: e.target.value })}
          className={`w-full px-4 py-3 rounded-xl bg-[#faf9f6] border text-slate-950 text-sm font-medium focus:outline-none focus:bg-white focus:border-teal-600 transition-all ${
            errors.details ? 'border-rose-400 focus:border-rose-500' : 'border-[#d8d5cd]'
          }`}
        />
        {errors.details && (
          <p className="mt-1.5 text-xs text-rose-700 flex items-center gap-1 font-bold">
            <AlertCircle className="w-3.5 h-3.5 shrink-0" />
            <span>{errors.details}</span>
          </p>
        )}
      </div>

      {/* Submit Button */}
      <Button
        type="submit"
        size="lg"
        variant="primary"
        fullWidth
        isLoading={isSubmitting}
        leftIcon={
          formData.contactMethod === 'whatsapp' ? (
            <MessageSquare className="w-4 h-4" />
          ) : formData.contactMethod === 'email' ? (
            <Mail className="w-4 h-4" />
          ) : (
            <Phone className="w-4 h-4" />
          )
        }
      >
        {formData.contactMethod === 'whatsapp'
          ? t.contact.form.submitDirectWhatsapp
          : formData.contactMethod === 'email'
          ? t.contact.form.submitDirectEmail
          : t.contact.form.submitGeneral}
      </Button>

      {/* Privacy Guarantee Note */}
      <p className="text-xs text-slate-600 text-center mt-4 font-medium">
        {t.contact.privacyNotice}
      </p>
    </form>
  );
};
