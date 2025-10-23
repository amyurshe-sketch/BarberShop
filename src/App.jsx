import { useEffect, useMemo, useState } from 'react'
import '../style.css'

const translations = {
  en: {
    'nav.home': 'Home',
    'nav.about': 'About',
    'nav.services': 'Services',
    'nav.gallery': 'Gallery',
    'nav.master': 'Master',
    'nav.contact': 'Booking',
    'hero.title': 'Professional Barbershop',
    'hero.subtitle': 'The art of haircut and shave in the hands of masters',
    'hero.button': 'Book Online',
    'about.title': 'Our Team',
    'about.subtitle': 'Professionals in Their Field',
    'about.text1':
      "Our team of experienced barbers with years of experience is ready to create the perfect look for you. We follow the latest trends in men's haircuts and are always happy to offer an individual approach to each client.",
    'about.text2':
      "Our salon has the atmosphere of a real men's club where you can relax and trust the professionals.",
    'services.title': 'Our Services',
    'services.service1.title': 'Clipper Cut',
    'services.service1.description':
      'Professional clipper haircut using various attachments',
    'services.service1.price': '300 RUB',
    'services.service2.title': 'Style Cut',
    'services.service2.description':
      'Creating a stylish look considering hair features and face shape',
    'services.service2.price': '600 RUB',
    'gallery.title': 'Our Works',
    'gallery.image1.alt': "Master's work",
    'gallery.image2.alt': 'Haircut process',
    'master.title': 'Art in Details',
    'master.subtitle': 'The standard of skill and creative approach',
    'master.description':
      'Our master demonstrates the highest level of professionalism. Every movement is perfected, every detail is thought out. With a razor and comb in hand, he creates not just a haircut, but a true work of art that reflects your individuality and style.',
    'contact.title': 'Online Booking',
    'contact.name': 'Your Name',
    'contact.phone': 'Phone',
    'contact.service': 'Service',
    'contact.message': 'Additional wishes',
    'contact.selectDefault': 'Choose service',
    'contact.option1': 'Clipper Cut - 300 RUB',
    'contact.option2': 'Style Cut - 600 RUB',
    'contact.placeholder': 'Your wishes...',
    'contact.button': 'Send Request',
    'tools.title': 'Professional Tools',
    'tools.description':
      'We use only the best equipment and tools to guarantee flawless results for every haircut and shave.',
    'modal.title': 'Thank you for booking!',
    'modal.message':
      'We will contact you shortly to confirm your appointment.',
    'modal.button': 'Close',
    'alert.required': 'Please fill in all required fields',
    'alert.success':
      'Application successfully sent! We will contact you shortly.',
    'alert.error':
      'An error occurred while sending the application. Please try again or contact us by phone.',
    'footer.copyright': '© 2024 BarberPro. All rights reserved.',
  },
  ru: {
    'nav.home': 'Главная',
    'nav.about': 'О нас',
    'nav.services': 'Услуги',
    'nav.gallery': 'Галерея',
    'nav.master': 'Мастер',
    'nav.contact': 'Запись',
    'hero.title': 'Профессиональный барбершоп',
    'hero.subtitle': 'Искусство стрижки и бритья в руках мастеров',
    'hero.button': 'Записаться онлайн',
    'about.title': 'Наша команда',
    'about.subtitle': 'Профессионалы своего дела',
    'about.text1':
      'Наша команда опытных барберов с многолетним опытом работы готова создать для вас идеальный образ. Мы следим за последними тенденциями в мире мужских стрижек и всегда рады предложить индивидуальный подход к каждому клиенту.',
    'about.text2':
      'В нашем салоне царит атмосфера настоящего мужского клуба, где вы можете расслабиться и довериться профессионалам.',
    'services.title': 'Наши услуги',
    'services.service1.title': 'Стрижка "под насадку"',
    'services.service1.description':
      'Профессиональная стрижка машинкой с использованием различных насадок',
    'services.service1.price': '300 руб.',
    'services.service2.title': 'Модельная стрижка',
    'services.service2.description':
      'Создание стильного образа с учетом особенностей волос и формы лица',
    'services.service2.price': '600 руб.',
    'gallery.title': 'Наши работы',
    'gallery.image1.alt': 'Работа мастера',
    'gallery.image2.alt': 'Процесс стрижки',
    'master.title': 'Искусство в деталях',
    'master.subtitle': 'Эталон мастерства и творческого подхода',
    'master.description':
      'Наш мастер демонстрирует высший уровень профессионализма. Каждое движение отточено до совершенства, каждая деталь продумана. С бритвой и расческой в руках он создает не просто стрижку, а настоящее произведение искусства, подчеркивающее вашу индивидуальность и стиль.',
    'contact.title': 'Онлайн запись',
    'contact.name': 'Ваше имя',
    'contact.phone': 'Телефон',
    'contact.service': 'Услуга',
    'contact.message': 'Дополнительные пожелания',
    'contact.selectDefault': 'Выберите услугу',
    'contact.option1': 'Стрижка "под насадку" - 300 руб.',
    'contact.option2': 'Модельная стрижка - 600 руб.',
    'contact.placeholder': 'Ваши пожелания...',
    'contact.button': 'Отправить заявку',
    'tools.title': 'Профессиональные инструменты',
    'tools.description':
      'Мы используем только лучшее оборудование и инструменты, чтобы гарантировать безупречный результат каждой стрижки и бритья',
    'modal.title': 'Спасибо за запись!',
    'modal.message':
      'Мы свяжемся с вами в ближайшее время для подтверждения записи.',
    'modal.button': 'Закрыть',
    'alert.required': 'Пожалуйста, заполните все обязательные поля',
    'alert.success':
      'Заявка успешно отправлена! Мы свяжемся с вами в ближайшее время.',
    'alert.error':
      'Произошла ошибка при отправке заявки. Пожалуйста, попробуйте еще раз или свяжитесь с нами по телефону.',
    'footer.copyright': '© 2024 BarberPro. Все права защищены.',
  },
}

const navItems = [
  { id: 'home', key: 'nav.home' },
  { id: 'about', key: 'nav.about' },
  { id: 'services', key: 'nav.services' },
  { id: 'gallery', key: 'nav.gallery' },
  { id: 'master', key: 'nav.master' },
  { id: 'contact', key: 'nav.contact' },
]

const services = [
  {
    titleKey: 'services.service1.title',
    descriptionKey: 'services.service1.description',
    priceKey: 'services.service1.price',
  },
  {
    titleKey: 'services.service2.title',
    descriptionKey: 'services.service2.description',
    priceKey: 'services.service2.price',
  },
]

const bookingOptions = [
  { value: 'clipper', labelKey: 'contact.option1' },
  { value: 'style', labelKey: 'contact.option2' },
]

const galleryItems = [
  {
    src: 'https://barber-shop-self-rho.vercel.app/image/image_3.jpeg',
    altKey: 'gallery.image1.alt',
  },
  {
    src: 'https://barber-shop-self-rho.vercel.app/image/image_4.jpeg',
    altKey: 'gallery.image2.alt',
  },
]

const TELEGRAM_ENDPOINT =
  'https://barber-shop-self-rho.vercel.app/api/telegram'

function App() {
  const getInitialLanguage = () => {
    if (typeof window === 'undefined') {
      return 'en'
    }
    return localStorage.getItem('language') || 'en'
  }

  const getInitialTheme = () => {
    if (typeof window === 'undefined') {
      return 'light'
    }
    const storedTheme = localStorage.getItem('theme')
    if (storedTheme) {
      return storedTheme
    }
    return window.matchMedia('(prefers-color-scheme: dark)').matches
      ? 'dark'
      : 'light'
  }

  const [language, setLanguage] = useState(getInitialLanguage)
  const [theme, setTheme] = useState(getInitialTheme)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isHeaderSolid, setIsHeaderSolid] = useState(false)

  const t = useMemo(
    () => (key) => translations[language]?.[key] ?? key,
    [language],
  )

  useEffect(() => {
    const handleScroll = () => {
      setIsHeaderSolid(window.scrollY > 100)
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll)

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        setIsModalOpen(false)
      }
    }

    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [])

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
    localStorage.setItem('theme', theme)
  }, [theme])

  useEffect(() => {
    localStorage.setItem('language', language)
  }, [language])

  useEffect(() => {
    document.body.style.overflow = isModalOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [isModalOpen])

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'))
  }

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === 'en' ? 'ru' : 'en'))
  }

  const handleAnchorClick = (event, targetId) => {
    event.preventDefault()
    const target = document.getElementById(targetId)
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  const closeModal = () => {
    setIsModalOpen(false)
  }

  const handleFormSubmit = async (event) => {
    event.preventDefault()

    const form = event.currentTarget
    const formData = new FormData(form)
    const name = (formData.get('name') ?? '').toString().trim()
    const phone = (formData.get('phone') ?? '').toString().trim()
    const serviceKey = (formData.get('service') ?? '').toString().trim()
    const rawMessage = (formData.get('message') ?? '').toString().trim()
    const message = rawMessage || t('contact.placeholder')
    const serviceLabelKey =
      bookingOptions.find((option) => option.value === serviceKey)?.labelKey ??
      ''

    if (!name || !phone || !serviceLabelKey) {
      window.alert(t('alert.required'))
      return
    }

    setIsSubmitting(true)

    try {
      const response = await fetch(TELEGRAM_ENDPOINT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name,
          phone,
          service: t(serviceLabelKey),
          message,
        }),
      })

      if (!response.ok) {
        throw new Error('Network response was not ok')
      }

      const data = await response.json()

      if (data.status === 'success') {
        form.reset()
        setIsModalOpen(true)

        if (typeof window !== 'undefined' && window.gtag) {
          window.gtag('event', 'form_submission', {
            event_category: 'lead',
            event_label: 'telegram_form',
          })
        }
      } else {
        throw new Error('Server response error')
      }
    } catch (error) {
      console.error('Error sending Telegram request', error)
      window.alert(t('alert.error'))
    } finally {
      setIsSubmitting(false)
    }
  }

  const themeIcon =
    theme === 'dark' ? (
      <>
        <path d="M12,18c-3.3,0-6-2.7-6-6s2.7-6,6-6s6,2.7,6,6S15.3,18,12,18zM12,8c-2.2,0-4,1.8-4,4c0,2.2,1.8,4,4,4c2.2,0,4-1.8,4-4C16,9.8,14.2,8,12,8z" />
        <path d="M12,4c-0.6,0-1-0.4-1-1V1c0-0.6,0.4-1,1-1s1,0.4,1,1v2C13,3.6,12.6,4,12,4z" />
        <path d="M12,20c-0.6,0-1,0.4-1,1v2c0,0.6,0.4,1,1,1s1-0.4,1-1v-2C13,20.4,12.6,20,12,20z" />
        <path d="M4.9,5.5c-0.3,0-0.5-0.1-0.7-0.3L2.8,3.9c-0.4-0.4-0.4-1,0-1.4s1-0.4,1.4,0l1.4,1.4c0.4,0.4,0.4,1,0,1.4C5.4,5.4,5.2,5.5,4.9,5.5z" />
        <path d="M19.1,18.5c-0.3,0-0.5-0.1-0.7-0.3l-1.4-1.4c-0.4-0.4-0.4-1,0-1.4s1-0.4,1.4,0l1.4,1.4c0.4,0.4,0.4,1,0,1.4C19.6,18.4,19.4,18.5,19.1,18.5z" />
        <path d="M3,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h2c0.6,0,1,0.4,1,1S3.6,13,3,13z" />
        <path d="M23,13h-2c-0.6,0-1-0.4-1-1s0.4-1,1-1h2c0.6,0,1,0.4,1,1S23.6,13,23,13z" />
        <path d="M4.9,18.5c-0.3,0-0.5-0.1-0.7-0.3c-0.4-0.4-0.4-1,0-1.4l1.4-1.4c0.4-0.4,1-0.4,1.4,0s0.4,1,0,1.4l-1.4,1.4C5.4,18.4,5.2,18.5,4.9,18.5z" />
        <path d="M19.1,5.5c-0.3,0-0.5-0.1-0.7-0.3l-1.4-1.4c-0.4-0.4-0.4-1,0-1.4s1-0.4,1.4,0l1.4,1.4c0.4,0.4,0.4,1,0,1.4C19.6,5.4,19.4,5.5,19.1,5.5z" />
      </>
    ) : (
      <>
        <path d="M12,11.8c-2,0-3.7-1.7-3.7-3.7s1.7-3.7,3.7-3.7s3.7,1.7,3.7,3.7S14,11.8,12,11.8z M12,5.4c-1.5,0-2.7,1.2-2.7,2.7s1.2,2.7,2.7,2.7s2.7-1.2,2.7-2.7S13.5,5.4,12,5.4z" />
        <path d="M12,15.8c-0.6,0-1-0.4-1-1v-2c0-0.6,0.4-1,1-1s1,0.4,1,1v2C13,15.4,12.6,15.8,12,15.8z" />
        <path d="M12,3.8c-0.6,0-1-0.4-1-1V1c0-0.6,0.4-1,1-1s1,0.4,1,1v1.8C13,3.4,12.6,3.8,12,3.8z" />
        <path d="M12,23c-0.6,0-1-0.4-1-1v-1.8c0-0.6,0.4-1,1-1s1,0.4,1,1V22C13,22.6,12.6,23,12,23z" />
        <path d="M5.6,6.6c-0.3,0-0.5-0.1-0.7-0.3L3.5,4.9c-0.4-0.4-0.4-1,0-1.4s1-0.4,1.4,0l1.4,1.4c0.4,0.4,0.4,1,0,1.4C6.1,6.5,5.9,6.6,5.6,6.6z" />
        <path d="M19.8,20.8c-0.3,0-0.5-0.1-0.7-0.3l-1.4-1.4c-0.4-0.4-0-1,0-1.4s1-0.4,1.4,0l1.4,1.4c0.4,0.4,0.4,1,0,1.4C20.3,20.7,20.1,20.8,19.8,20.8z" />
        <path d="M3,13H1.2c-0.6,0-1-0.4-1-1s0.4-1,1-1H3c0.6,0,1,0.4,1,1S3.6,13,3,13z" />
        <path d="M22.8,13H21c-0.6,0-1-0.4-1-1s0.4-1,1-1h1.8c0.6,0,1,0.4,1,1S23.4,13,22.8,13z" />
        <path d="M5.6,20.8c-0.3,0-0.5-0.1-0.7-0.3c-0.4-0.4-0.4-1,0-1.4l1.4-1.4c0.4-0.4,1-0.4,1.4,0s0.4,1,0,1.4l-1.4,1.4C6.1,20.7,5.9,20.8,5.6,20.8z" />
        <path d="M19.8,6.6c-0.3,0-0.5-0.1-0.7-0.3l-1.4-1.4c-0.4-0.4-0.4-1,0-1.4s1-0.4,1.4,0l1.4,1.4c0.4,0.4,0.4,1,0,1.4C20.3,6.5,20.1,6.6,19.8,6.6z" />
      </>
    )

  const headerStyle = isHeaderSolid
    ? { background: 'rgba(26, 26, 26, 0.95)', backdropFilter: 'blur(10px)' }
    : {}

  const languageToggleLabel = language === 'en' ? 'RU' : 'EN'
  const submitLabel = isSubmitting
    ? `${t('contact.button')}...`
    : t('contact.button')

  return (
    <>
      <header style={headerStyle}>
        <nav className="container">
          <div className="logo">BARBERPRO</div>
          <ul className="nav-links">
            {navItems.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  onClick={(event) => handleAnchorClick(event, item.id)}
                >
                  {t(item.key)}
                </a>
              </li>
            ))}
          </ul>
          <div className="nav-controls">
            <button
              type="button"
              className="language-toggle"
              onClick={toggleLanguage}
            >
              {languageToggleLabel}
            </button>
            <button
              type="button"
              className="theme-toggle"
              onClick={toggleTheme}
              aria-label="Toggle theme"
            >
              <svg viewBox="0 0 24 24" width="20" height="20">
                {themeIcon}
              </svg>
            </button>
          </div>
        </nav>
      </header>

      <section id="home" className="hero">
        <div className="hero-content">
          <h1>{t('hero.title')}</h1>
          <p>{t('hero.subtitle')}</p>
          <a
            href="#contact"
            className="btn"
            onClick={(event) => handleAnchorClick(event, 'contact')}
          >
            {t('hero.button')}
          </a>
        </div>
      </section>

      <section id="about" className="about">
        <div className="container">
          <h2 className="section-title">{t('about.title')}</h2>
          <div className="about-content">
            <div>
              <img
                src="https://barber-shop-self-rho.vercel.app/image/image_2.jpeg"
                alt={t('about.subtitle')}
                className="about-image"
              />
            </div>
            <div>
              <h3>{t('about.subtitle')}</h3>
              <p>{t('about.text1')}</p>
              <p>{t('about.text2')}</p>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="services">
        <div className="container">
          <h2 className="section-title">{t('services.title')}</h2>
          <div className="services-grid">
            {services.map((service) => (
              <div className="service-card" key={service.titleKey}>
                <h3>{t(service.titleKey)}</h3>
                <p>{t(service.descriptionKey)}</p>
                <div className="price">{t(service.priceKey)}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="gallery" className="gallery">
        <div className="container">
          <h2 className="section-title">{t('gallery.title')}</h2>
          <div className="gallery-grid">
            {galleryItems.map((item) => (
              <div className="gallery-item" key={item.src}>
                <img src={item.src} alt={t(item.altKey)} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="master" className="master-showcase">
        <div className="container">
          <div className="master-content">
            <img
              src="https://barber-shop-self-rho.vercel.app/image/image_6.jpeg"
              alt={t('master.subtitle')}
              className="master-image"
            />
            <h2 className="master-title">{t('master.title')}</h2>
            <p className="master-subtitle">{t('master.subtitle')}</p>
            <p className="master-description">{t('master.description')}</p>
          </div>
        </div>
      </section>

      <section id="contact" className="contact">
        <div className="container">
          <h2 className="section-title">{t('contact.title')}</h2>
          <form className="contact-form" onSubmit={handleFormSubmit}>
            <div className="form-group">
              <label htmlFor="name">{t('contact.name')}</label>
              <input type="text" id="name" name="name" required />
            </div>
            <div className="form-group">
              <label htmlFor="phone">{t('contact.phone')}</label>
              <input type="tel" id="phone" name="phone" required />
            </div>
            <div className="form-group">
              <label htmlFor="service">{t('contact.service')}</label>
              <select id="service" name="service" required defaultValue="">
                <option value="" disabled>
                  {t('contact.selectDefault')}
                </option>
                {bookingOptions.map((option) => (
                  <option value={option.value} key={option.value}>
                    {t(option.labelKey)}
                  </option>
                ))}
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="message">{t('contact.message')}</label>
              <textarea
                id="message"
                name="message"
                placeholder={t('contact.placeholder')}
              />
            </div>
            <button type="submit" className="btn" disabled={isSubmitting}>
              {submitLabel}
            </button>
          </form>
        </div>
      </section>

      <section className="tools-showcase">
        <div className="container">
          <h2 className="tools-title">{t('tools.title')}</h2>
          <p className="tools-description">{t('tools.description')}</p>
          <img
            src="https://barber-shop-self-rho.vercel.app/image/image_5.jpeg"
            alt={t('tools.title')}
            className="tools-image"
          />
        </div>
      </section>

      <footer>
        <div className="container">
          <p>{t('footer.copyright')}</p>
        </div>
      </footer>

      <div
        className={`success-modal${isModalOpen ? ' active' : ''}`}
        id="successModal"
        onClick={(event) => {
          if (event.target === event.currentTarget) {
            closeModal()
          }
        }}
      >
        <div className="modal-content">
          <img
            src="https://barber-shop-self-rho.vercel.app/image/image_7.jpeg"
            alt={t('modal.title')}
            className="success-image"
          />
          <h3>{t('modal.title')}</h3>
          <p>{t('modal.message')}</p>
          <button type="button" className="btn" onClick={closeModal}>
            {t('modal.button')}
          </button>
        </div>
      </div>
    </>
  )
}

export default App
