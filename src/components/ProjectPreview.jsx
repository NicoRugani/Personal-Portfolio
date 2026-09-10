// These are labeled technical sketches, not screenshots of the projects.
export default function ProjectPreview({ kind }) {
  if (kind === 'linked-list') {
    return (
      <figure className="project-preview">
        <svg
          viewBox="0 0 400 210"
          role="img"
          aria-label="Four linked-list nodes connected in a circular loop"
        >
          <path
            className="diagram-line"
            d="M85 90H127 M169 90H211 M253 90H295 M316 112V150H64V112"
          />
          <path
            className="diagram-arrow"
            d="m119 84 8 6-8 6m84-12 8 6-8 6m84-12 8 6-8 6M58 120l6-8 6 8"
          />
          {[64, 148, 232, 316].map((x, index) => (
            <g key={x}>
              <circle
                className={index === 1 ? 'diagram-node is-highlighted' : 'diagram-node'}
                cx={x}
                cy="90"
                r="21"
              />
              <text x={x} y="96" textAnchor="middle">
                {index + 1}
              </text>
            </g>
          ))}
          <text className="diagram-caption" x="148" y="47" textAnchor="middle">
            current
          </text>
        </svg>
        <figcaption>Circular linked list · structure sketch</figcaption>
      </figure>
    );
  }

  if (kind === 'tree') {
    return (
      <figure className="project-preview">
        <svg
          viewBox="0 0 400 210"
          role="img"
          aria-label="A question at the root of a binary tree branches into yes and no paths"
        >
          <path
            className="diagram-line"
            d="m183 65-63 40m97-40 63 40M100 137l-30 27m50-27 30 27m125-27-30 27m50-27 30 27"
          />
          <rect
            className="diagram-node is-highlighted"
            x="161"
            y="31"
            width="78"
            height="40"
            rx="20"
          />
          <text x="200" y="57" textAnchor="middle">
            ?
          </text>
          <rect className="diagram-node" x="72" y="101" width="78" height="38" rx="19" />
          <rect className="diagram-node" x="250" y="101" width="78" height="38" rx="19" />
          <text x="111" y="126" textAnchor="middle">
            Yes
          </text>
          <text x="289" y="126" textAnchor="middle">
            No
          </text>
          {[64, 154, 245, 334].map((x) => (
            <circle key={x} className="diagram-leaf" cx={x} cy="174" r="10" />
          ))}
        </svg>
        <figcaption>Binary tree · structure sketch</figcaption>
      </figure>
    );
  }

  return (
    <figure className="project-preview">
      <svg
        viewBox="0 0 400 210"
        role="img"
        aria-label="A three-column desktop layout becomes a single-column layout on a phone"
      >
        <rect className="diagram-node" x="39" y="35" width="217" height="138" rx="7" />
        <path className="diagram-line" d="M39 59H256" />
        <rect className="diagram-block" x="54" y="74" width="187" height="25" rx="3" />
        {[54, 120, 186].map((x) => (
          <rect key={x} className="diagram-block" x={x} y="111" width="55" height="46" rx="3" />
        ))}
        <rect className="diagram-node" x="286" y="54" width="74" height="135" rx="9" />
        <path className="diagram-line" d="M286 77H360" />
        <rect className="diagram-block" x="297" y="88" width="52" height="22" rx="3" />
        <rect className="diagram-block" x="297" y="120" width="52" height="24" rx="3" />
        <rect className="diagram-block" x="297" y="153" width="52" height="24" rx="3" />
      </svg>
      <figcaption>Responsive layout · structure sketch</figcaption>
    </figure>
  );
}
