import { Route, Routes } from 'react-router-dom'
import { Sidebar } from './components/layout/Sidebar'
import { MobileNav } from './components/layout/MobileNav'
import { ScrollToTop } from './components/layout/ScrollToTop'
import { PageTransition } from './components/layout/PageTransition'
import { Footer } from './components/sections/Footer'
import { Home } from './pages/Home'
import { Portfolio } from './pages/Portfolio'
import { ResumePage } from './pages/ResumePage'
import { ServicesPage } from './pages/ServicesPage'
import { CertificatesPage } from './pages/CertificatesPage'
import { ContactPage } from './pages/ContactPage'
import { NotFound } from './pages/NotFound'

function App() {
  return (
    <div className="min-h-screen bg-bg">
      <Sidebar />
      <MobileNav />
      <ScrollToTop />

      <main className="lg:pl-[300px]">
        <PageTransition>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/resume" element={<ResumePage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/certificates" element={<CertificatesPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </PageTransition>
        <Footer />
      </main>
    </div>
  )
}

export default App
