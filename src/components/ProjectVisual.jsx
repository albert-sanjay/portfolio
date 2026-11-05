// Stylised "browser window" previews for each project.
// To use a real screenshot instead, put an image in /public and pass it as `image`.
export default function ProjectVisual({ project, image }) {
  return (
    <div className={`browser browser--${project.accent}`}>
      <div className="browser__bar">
        <span className="dot" /><span className="dot" /><span className="dot" />
        <span className="browser__url">{project.domain}</span>
      </div>
      <div className={`browser__body ${image ? 'browser__body--image' : ''}`}>
        {image ? (
          <img src={image} alt={`${project.name} screenshot`} loading="lazy" />
        ) : project.accent === 'sunrise' ? (
          <SunriseMock />
        ) : (
          <DentalMock />
        )}
      </div>
    </div>
  )
}

function SunriseMock() {
  return (
    <div className="mock mock--sunrise">
      <div className="mock__sun" />
      <div className="mock__horizon" />
      <div className="mock__login">
        <div className="mock__wifi" aria-hidden>
          <span /><span /><span />
        </div>
        <p className="mock__title">Welcome to the network</p>
        <div className="mock__field"><small>Username</small><b>room-14b</b></div>
        <div className="mock__field"><small>Password</small><b>••••••••</b></div>
        <div className="mock__btn">Connect</div>
        <p className="mock__note">Plan: Monthly · active</p>
      </div>
    </div>
  )
}

function DentalMock() {
  return (
    <div className="mock mock--dental">
      <div className="mock__nav"><i /><span /><span /><span /></div>
      <div className="mock__hero">
        <div>
          <span className="mock__line mock__line--lg" />
          <span className="mock__line mock__line--md" />
          <span className="mock__line mock__line--sm" />
          <div className="mock__cta">Book a visit</div>
        </div>
        <svg viewBox="0 0 64 64" className="mock__tooth" aria-hidden>
          <path d="M20 8c-7 0-12 5-12 13 0 6 3 10 4 16 1 7 2 19 7 19 4 0 4-10 7-14 1-2 3-2 4-2s3 0 4 2c3 4 3 14 7 14 5 0 6-12 7-19 1-6 4-10 4-16 0-8-5-13-12-13-5 0-7 3-10 3s-5-3-10-3Z" />
        </svg>
      </div>
      <div className="mock__cards"><span /><span /><span /></div>
    </div>
  )
}
