import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { motion, useReducedMotion } from 'framer-motion';
import { useState } from 'react';

const contactSchema = z.object({
  nombre: z
    .string()
    .min(2, 'El nombre debe tener al menos 2 caracteres'),
  email: z
    .string()
    .email('Ingresá un email válido'),
  empresa: z
    .string()
    .optional()
    .or(z.literal('')),
  mensaje: z
    .string()
    .min(10, 'El mensaje debe tener al menos 10 caracteres'),
});

type ContactFormData = z.infer<typeof contactSchema>;

type SubmitState = 'idle' | 'submitting' | 'success' | 'error';

const FORMSPREE_ENDPOINT = import.meta.env.PUBLIC_FORMSPREE_ID
  ? `https://formspree.io/f/${import.meta.env.PUBLIC_FORMSPREE_ID}`
  : null;

export default function ContactForm() {
  const [submitState, setSubmitState] = useState<SubmitState>('idle');
  const [errorMessage, setErrorMessage] = useState('');
  const prefersReducedMotion = useReducedMotion();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    mode: 'onBlur',
  });

  const onSubmit = async (data: ContactFormData) => {
    if (!FORMSPREE_ENDPOINT) {
      setSubmitState('error');
      setErrorMessage(
        'El formulario no está configurado. Contactanos directamente por email.'
      );
      return;
    }

    setSubmitState('submitting');
    setErrorMessage('');

    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setSubmitState('success');
        reset();
      } else {
        setSubmitState('error');
        setErrorMessage('Hubo un error. Intentá de nuevo.');
      }
    } catch {
      setSubmitState('error');
      setErrorMessage('Hubo un error. Intentá de nuevo.');
    }
  };

  // Success state
  if (submitState === 'success') {
    return (
      <motion.div
        initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-surface border border-accent/20 rounded-xl p-8 text-center"
      >
        <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-8 h-8 text-accent">
            <polyline points="20 6 9 17 4 12" />
          </svg>
        </div>
        <h3 className="text-2xl font-bold text-text mb-2">¡Mensaje enviado!</h3>
        <p className="text-text-secondary">
          Gracias por contactarte. Te respondemos a la brevedad.
        </p>
      </motion.div>
    );
  }

  const inputClass =
    'w-full bg-bg border border-text-secondary/20 rounded-lg px-4 py-3 text-text placeholder-text-secondary/50 ' +
    'focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-all duration-200';
  const errorClass = 'text-red-400 text-sm mt-1';
  const labelClass = 'block text-text font-medium mb-1.5 text-sm';

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-5">
      {/* Nombre */}
      <div>
        <label htmlFor="nombre" className={labelClass}>
          Nombre <span className="text-primary">*</span>
        </label>
        <input
          id="nombre"
          type="text"
          placeholder="Tu nombre"
          {...register('nombre')}
          className={inputClass}
          aria-invalid={!!errors.nombre}
        />
        {errors.nombre && (
          <p className={errorClass} role="alert">{errors.nombre.message}</p>
        )}
      </div>

      {/* Email */}
      <div>
        <label htmlFor="email" className={labelClass}>
          Email <span className="text-primary">*</span>
        </label>
        <input
          id="email"
          type="email"
          placeholder="tu@email.com"
          {...register('email')}
          className={inputClass}
          aria-invalid={!!errors.email}
        />
        {errors.email && (
          <p className={errorClass} role="alert">{errors.email.message}</p>
        )}
      </div>

      {/* Empresa */}
      <div>
        <label htmlFor="empresa" className={labelClass}>
          Empresa
        </label>
        <input
          id="empresa"
          type="text"
          placeholder="Tu empresa (opcional)"
          {...register('empresa')}
          className={inputClass}
        />
        {errors.empresa && (
          <p className={errorClass} role="alert">{errors.empresa.message}</p>
        )}
      </div>

      {/* Mensaje */}
      <div>
        <label htmlFor="mensaje" className={labelClass}>
          Mensaje <span className="text-primary">*</span>
        </label>
        <textarea
          id="mensaje"
          rows={4}
          placeholder="Contanos sobre tu proyecto..."
          {...register('mensaje')}
          className={`${inputClass} resize-y min-h-[100px]`}
          aria-invalid={!!errors.mensaje}
        />
        {errors.mensaje && (
          <p className={errorClass} role="alert">{errors.mensaje.message}</p>
        )}
      </div>

      {/* Submit button */}
      <button
        type="submit"
        disabled={submitState === 'submitting'}
        className="w-full bg-primary text-bg font-semibold py-3 px-6 rounded-lg
          hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary/50
          disabled:opacity-60 disabled:cursor-not-allowed
          transition-all duration-200"
      >
        {submitState === 'submitting' ? (
          <span className="flex items-center justify-center gap-2">
            <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24" fill="none">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
            </svg>
            Enviando...
          </span>
        ) : (
          'Enviar mensaje'
        )}
      </button>

      {/* Error message */}
      {submitState === 'error' && (
        <motion.div
          initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="p-4 rounded-lg bg-red-500/10 border border-red-500/20 text-red-400 text-sm"
          role="alert"
        >
          {errorMessage}
        </motion.div>
      )}
    </form>
  );
}
