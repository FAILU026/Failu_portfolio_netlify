import { portfolioData } from '../data/portfolio'
import { Hero } from '../components/sections/Hero'
import { About } from '../components/sections/About'
import { Services } from '../components/sections/Services'
import { SectionHeading } from '../components/ui/SectionHeading'
import { ProjectCard } from '../components/ui/ProjectCard'
import { Button } from '../components/ui/Button'

export function Home() {
  const featured = portfolioData.projects.filter((project) => project.featured).slice(0, 2)

  return (
    <>
      <Hero />
      <About />

      <section className="bg-surface-muted/50 px-6 py-24 sm:px-10 lg:px-16">
        <div className="mx-auto max-w-5xl">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <SectionHeading
              eyebrow="Featured Projects"
              title="Some of my recent work"
              description="A couple of products I've built end to end — see the full portfolio for more."
            />
            <Button to="/portfolio" variant="secondary" icon="arrow-right">
              View All Projects
            </Button>
          </div>

          <div className="mt-14 grid grid-cols-1 gap-8 sm:grid-cols-2">
            {featured.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </section>

      <Services />
      {/* <Testimonials /> */}
    </>
  )
}
