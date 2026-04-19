import React from 'react';
import { Link } from 'react-router-dom';
import { SITE_CONFIG } from '../../../data/config';
import { ArrowLeft } from 'lucide-react';

const SectionHeading = ({ children }) => (
  <h2
    style={{
      fontFamily: "'Neuton', 'Georgia', serif",
      fontSize: 'clamp(24px, 3vw, 36px)',
      fontWeight: 700,
      color: '#111',
      lineHeight: 1.2,
      marginBottom: '20px',
    }}
  >
    {children}
  </h2>
);

const Body = ({ children, style = {} }) => (
  <p
    style={{
      fontFamily: 'Inter, sans-serif',
      fontSize: '15px',
      color: '#444',
      lineHeight: 1.85,
      ...style,
    }}
  >
    {children}
  </p>
);

const BulletList = ({ items }) => (
  <ul style={{ listStyle: 'disc', paddingLeft: '20px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
    {items.map((item, i) => (
      <li key={i} style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: '#444', lineHeight: 1.75 }}>
        {item}
      </li>
    ))}
  </ul>
);

// Placeholder for hero / section images
const ImgPlaceholder = ({ label = 'Image coming soon', ratio = '16/9' }) => (
  <div
    style={{
      width: '100%',
      aspectRatio: ratio,
      background: '#f3f4f6',
      border: '1px dashed #d1d5db',
      borderRadius: '8px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: '#9ca3af',
      fontSize: '12px',
      fontFamily: 'Inter, sans-serif',
      letterSpacing: '0.05em',
    }}
  >
    {label}
  </div>
);

const DetailProjectPage = ({ products }) => {
  if (!products) return null;

  // Find next project for the "Up Next" section
  const currentIndex = SITE_CONFIG.projects.findIndex(p => p.id === products.id);
  const nextProject = SITE_CONFIG.projects[(currentIndex + 1) % SITE_CONFIG.projects.length];

  return (
    <div
      style={{
        background: '#ffffff',
        minHeight: '100vh',
        color: '#111',
        fontFamily: 'Inter, sans-serif',
      }}
    >
      {/* ─── BACK BUTTON ─── */}
      <div style={{ paddingTop: '100px', paddingLeft: '40px', paddingBottom: '8px' }}>
        <Link
          to="/"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '6px',
            fontFamily: 'Inter, sans-serif',
            fontSize: '12px',
            fontWeight: 500,
            color: '#888',
            textDecoration: 'none',
            letterSpacing: '0.04em',
          }}
        >
          <ArrowLeft size={14} />
          BACK
        </Link>
      </div>

      {/* ─── MAIN CONTENT ─── */}
      <article style={{ maxWidth: '760px', margin: '0 auto', padding: '0 24px 80px' }}>

        {/* ── TITLE ── */}
        <div style={{ textAlign: 'center', marginBottom: '24px', marginTop: '24px' }}>
          <h1
            style={{
              fontFamily: "'Neuton', 'Georgia', serif",
              fontSize: 'clamp(32px, 5vw, 56px)',
              fontWeight: 700,
              lineHeight: 1.15,
              color: '#111',
              letterSpacing: '-0.01em',
            }}
          >
            {products.title}
          </h1>
        </div>

        {/* ── SUBTITLE / TAG LINE ── */}
        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
          <p
            style={{
              fontFamily: "'Courier New', Courier, monospace",
              fontSize: '11px',
              fontWeight: 700,
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              color: '#f59e0b',
            }}
          >
            {products.tags?.join(' · ')}
          </p>
        </div>

        {/* ── HERO IMAGE ── */}
        <div style={{ marginBottom: '64px' }}>
          {products.img ? (
            <img
              src={products.img}
              alt={products.title}
              style={{ width: '100%', borderRadius: '6px', display: 'block' }}
            />
          ) : (
            <ImgPlaceholder label="Hero image — coming soon" ratio="16/9" />
          )}
        </div>

        {/* ── BACKGROUND ── */}
        <section style={{ marginBottom: '56px' }}>
          <SectionHeading>Background</SectionHeading>
          <Body>{products.overview || products.description}</Body>
        </section>

        <hr style={{ border: 'none', borderTop: '1px solid #e5e7eb', marginBottom: '56px' }} />

        {/* ── PROBLEM STATEMENT ── */}
        <section style={{ marginBottom: '56px' }}>
          <SectionHeading>Problem Statement</SectionHeading>
          {products.features?.length > 0 && (
            <>
              <Body style={{ marginBottom: '20px' }}>
                {products.description}
              </Body>
              <BulletList items={products.features} />
            </>
          )}
          {/* Section image placeholder */}
          <div style={{ marginTop: '32px' }}>
            <ImgPlaceholder label="Section image — coming soon" ratio="21/9" />
          </div>
        </section>

        <hr style={{ border: 'none', borderTop: '1px solid #e5e7eb', marginBottom: '56px' }} />

        {/* ── CHALLENGES ── */}
        {products.challenges?.length > 0 && (
          <>
            <section style={{ marginBottom: '56px' }}>
              <SectionHeading>Challenges</SectionHeading>
              {/* Two-column label + bullets layout (matching reference screenshot) */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
                {products.challenges.map((challenge, i) => (
                  <div key={i} style={{ display: 'grid', gridTemplateColumns: '160px 1fr', gap: '24px', alignItems: 'start' }}>
                    <p
                      style={{
                        fontFamily: "'Neuton', serif",
                        fontSize: '20px',
                        fontWeight: 600,
                        color: '#888',
                        lineHeight: 1.4,
                        paddingTop: '2px',
                      }}
                    >
                      {i + 1}.&nbsp; {challenge.split('.')[0] || `Point ${i + 1}`}
                    </p>
                    <Body>{challenge}</Body>
                  </div>
                ))}
              </div>
            </section>
            <hr style={{ border: 'none', borderTop: '1px solid #e5e7eb', marginBottom: '56px' }} />
          </>
        )}

        {/* ── TECH STACK ── */}
        <section style={{ marginBottom: '56px' }}>
          <SectionHeading>Tech Stack</SectionHeading>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', marginTop: '16px' }}>
            {products.techstack?.map((tech) => (
              <span
                key={tech}
                style={{
                  fontFamily: "'Courier New', monospace",
                  fontSize: '11px',
                  fontWeight: 700,
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                  color: '#444',
                  background: '#f3f4f6',
                  border: '1px solid #e5e7eb',
                  borderRadius: '4px',
                  padding: '6px 14px',
                }}
              >
                {tech}
              </span>
            ))}
          </div>
        </section>

        {/* ── GALLERY (additional images) ── */}
        {products.images?.length > 0 && (
          <section style={{ marginBottom: '56px' }}>
            <SectionHeading>Gallery</SectionHeading>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
              {products.images.map((src, i) => (
                <img
                  key={i}
                  src={src}
                  alt={`screenshot-${i + 1}`}
                  style={{ width: '100%', borderRadius: '6px', border: '1px solid #e5e7eb' }}
                />
              ))}
            </div>
          </section>
        )}

        {/* ── ACTION BUTTONS ── */}
        <div style={{ display: 'flex', gap: '16px', marginBottom: '80px', flexWrap: 'wrap' }}>
          {products.liveDemoLink && (
            <a
              href={products.liveDemoLink}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                padding: '12px 32px',
                background: '#111',
                color: '#fff',
                fontFamily: 'Inter, sans-serif',
                fontSize: '13px',
                fontWeight: 600,
                textDecoration: 'none',
                borderRadius: '6px',
                display: 'inline-block',
              }}
            >
              Live Demo
            </a>
          )}
          {products.sourceCodeLink && (
            <a
              href={products.sourceCodeLink}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                padding: '12px 32px',
                background: 'transparent',
                color: '#111',
                fontFamily: 'Inter, sans-serif',
                fontSize: '13px',
                fontWeight: 600,
                textDecoration: 'none',
                borderRadius: '6px',
                border: '1px solid #d1d5db',
                display: 'inline-block',
              }}
            >
              Source Code
            </a>
          )}
        </div>

        {/* ── UP NEXT ── */}
        {nextProject && (
          <div style={{ borderTop: '1px solid #e5e7eb', paddingTop: '48px' }}>
            <p
              style={{
                fontFamily: "'Courier New', monospace",
                fontSize: '10px',
                fontWeight: 700,
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
                color: '#aaa',
                marginBottom: '16px',
              }}
            >
              Up Next
            </p>
            <Link
              to={`/project/${nextProject.id}`}
              style={{ textDecoration: 'none' }}
            >
              <h3
                style={{
                  fontFamily: "'Neuton', serif",
                  fontSize: '32px',
                  fontWeight: 700,
                  color: '#111',
                  lineHeight: 1.2,
                  transition: 'color 0.2s ease',
                }}
                onMouseEnter={e => (e.target.style.color = '#f59e0b')}
                onMouseLeave={e => (e.target.style.color = '#111')}
              >
                {nextProject.title} →
              </h3>
            </Link>
          </div>
        )}
      </article>
    </div>
  );
};

export default DetailProjectPage;