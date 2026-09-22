import type { Project } from '../../types/portfolio'
import { Icon } from './Icon'

export function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="group relative flex flex-col overflow-hidden rounded-2xl border border-border bg-surface transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-black/5">
      <div className="relative aspect-[16/10] overflow-hidden bg-surface-muted">
        {project.image ? (
          <img
            src={project.image}
            alt={`${project.title} preview`}
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center">
            <span className="font-display text-sm font-medium tracking-wide text-muted">
              [Project Image]
            </span>
          </div>
        )}
        <div className="absolute inset-0 flex items-end justify-between bg-heading/0 p-5 opacity-0 transition-all duration-300 group-hover:bg-heading/40 group-hover:opacity-100">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex translate-y-2 items-center gap-2 rounded-full bg-bg px-4 py-2 text-xs font-semibold text-heading transition-transform duration-300 group-hover:translate-y-0"
            >
              View Project
              <Icon name="arrow-up-right" className="h-3.5 w-3.5" />
            </a>
          )}
        </div>
      </div>

      <div className="flex flex-1 flex-col gap-3 p-6">
        <div className="flex items-center justify-between gap-3">
          <span className="text-xs font-semibold uppercase tracking-wider text-accent">
            {project.category}
          </span>
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noreferrer"
              aria-label={`View ${project.title} source on GitHub`}
              className="text-muted transition-colors hover:text-accent"
            >
              <Icon name="github" className="h-4 w-4" />
            </a>
          )}
        </div>

        <h3 className="text-lg font-semibold text-heading">{project.title}</h3>
        <p className="text-sm leading-relaxed text-muted">{project.description}</p>

        <div className="mt-auto flex flex-wrap gap-2 pt-3">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-border bg-surface-muted px-2.5 py-1 font-mono text-[11px] text-muted"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </article>
  )
}
