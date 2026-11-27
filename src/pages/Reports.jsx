import React from "react";
import Navbar from "../Navbar";
import { reportsData } from "../data/reportsData";
import "./Reports.css";

export default function Reports() {
  return (
    <>
      <Navbar />
      <main className="reports-page">
        <div className="reports-container">
          <header className="reports-header">
            <p className="reports-kicker">ARCHIVE &amp; DOCUMENTATION</p>
            <h1 className="reports-title">Activity Reports.</h1>
            <p className="reports-subtitle">
              Official yearly activity reports, technical fest summaries, and
              open-source community documentation of the Free Software Wing (FSW), GRIET.
            </p>
          </header>

          <div className="reports-list">
            {reportsData.map((report, idx) => {
              const indexNumber = String(idx + 1).padStart(2, "0");

              return (
                <article key={report.id} className="report-row">
                  <div className="report-meta">
                    <span className="report-index">{indexNumber}</span>

                    <div className="report-info">
                      <div className="report-badge-row">
                        <span className="report-year-tag">AY {report.year}</span>
                        <span className="report-format-pill">PDF</span>
                      </div>
                      <h2 className="report-name">{report.title}</h2>
                    </div>
                  </div>

                  <div className="report-actions">
                    <a
                      href={report.fileUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-view-pdf"
                    >
                      <span>View PDF</span>
                      <span aria-hidden="true">↗</span>
                    </a>

                    <a
                      href={report.fileUrl}
                      download
                      className="btn-download-pdf"
                    >
                      <span>Download</span>
                      <span aria-hidden="true">↓</span>
                    </a>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </main>
    </>
  );
}