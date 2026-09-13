import { useState } from 'react'
import { AI_WISH_SUGGESTIONS } from '../data/invitation'

export default function SendWishes({ onSubmit }) {
  const [name, setName] = useState('')
  const [message, setMessage] = useState('')
  const [feedback, setFeedback] = useState('')
  const [aiIndex, setAiIndex] = useState(0)

  const generateAiWish = () => {
    setMessage(AI_WISH_SUGGESTIONS[aiIndex % AI_WISH_SUGGESTIONS.length])
    setAiIndex((i) => i + 1)
  }

  const submit = (e) => {
    e.preventDefault()
    if (!name.trim() || !message.trim()) return
    onSubmit({ name: name.trim(), message: message.trim() })
    setName('')
    setMessage('')
    setFeedback('Thank you! Your wish has been added below.')
    setTimeout(() => setFeedback(''), 4000)
  }

  return (
    <section className="wed010-wishes-section">
      <div className="wed010-wishes-container">
        <img src="/assets/decorations/flower-tl.webp" className="flower top-left" alt="" aria-hidden="true" />
        <img src="/assets/decorations/flower-tr.webp" className="flower top-right" alt="" aria-hidden="true" />
        <img src="/assets/decorations/flower-bl.webp" className="flower bottom-left" alt="" aria-hidden="true" />
        <img src="/assets/decorations/flower-br.webp" className="flower bottom-right" alt="" aria-hidden="true" />

        <div className="wed010-wishes-content">
          <h2 className="wed010-wishes-title">Send your Wishes</h2>
          <div className="wed010-sendWishes-wrapper">
            <div id="wisher-section" className="Wisher-Section wed010-shared-wisher">
              <div id="wisher-container" className="wisher-container">
                <form id="wisher-form" className="wisher-form" onSubmit={submit}>
                  <input
                    id="wisher-name-input"
                    type="text"
                    className="wisher-input"
                    placeholder="Your Name"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                  <div className="wisher-textarea-wrapper">
                    <textarea
                      id="wisher-message-input"
                      className="wisher-textarea"
                      placeholder="Your Wishes"
                      required
                      maxLength={200}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                    />
                    <button type="button" className="wisher-ai-btn" onClick={generateAiWish}>
                      <span className="wisher-ai-sparkle" aria-hidden="true">
                        <svg
                          stroke="currentColor"
                          fill="currentColor"
                          strokeWidth="0"
                          viewBox="0 0 24 24"
                          height="1em"
                          width="1em"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fillRule="evenodd"
                            d="M9 4.5a.75.75 0 0 1 .721.544l.813 2.846a3.75 3.75 0 0 0 2.576 2.576l2.846.813a.75.75 0 0 1 0 1.442l-2.846.813a3.75 3.75 0 0 0-2.576 2.576l-.813 2.846a.75.75 0 0 1-1.442 0l-.813-2.846a3.75 3.75 0 0 0-2.576-2.576l-2.846-.813a.75.75 0 0 1 0-1.442l2.846-.813A3.75 3.75 0 0 0 7.466 7.89l.813-2.846A.75.75 0 0 1 9 4.5ZM18 1.5a.75.75 0 0 1 .728.568l.258 1.036c.236.94.97 1.674 1.91 1.91l1.036.258a.75.75 0 0 1 0 1.456l-1.036.258c-.94.236-1.674.97-1.91 1.91l-.258 1.036a.75.75 0 0 1-1.456 0l-.258-1.036a2.625 2.625 0 0 0-1.91-1.91l-1.036-.258a.75.75 0 0 1 0-1.456l1.036-.258a2.625 2.625 0 0 0 1.91-1.91l.258-1.036A.75.75 0 0 1 18 1.5ZM16.5 15a.75.75 0 0 1 .712.513l.394 1.183c.15.447.5.799.948.948l1.183.395a.75.75 0 0 1 0 1.422l-1.183.395c-.447.15-.799.5-.948.948l-.395 1.183a.75.75 0 0 1-1.422 0l-.395-1.183a1.5 1.5 0 0 0-.948-.948l-1.183-.395a.75.75 0 0 1 0-1.422l1.183-.395c.447-.15.799-.5.948-.948l.395-1.183A.75.75 0 0 1 16.5 15Z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </span>
                      <span className="ai-text">Generate AI wishes</span>
                    </button>
                  </div>
                  <div className="wisher-btn-container">
                    <button id="wisher-submit-btn" type="submit" className="wisher-button">
                      Submit
                    </button>
                  </div>
                  {feedback && <p className="wisher-feedback">{feedback}</p>}
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
