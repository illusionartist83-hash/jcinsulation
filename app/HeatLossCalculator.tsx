"use client";

import { useMemo, useState } from "react";

export default function IndustrialCalculators() {
  const [activeTab, setActiveTab] = useState("heatloss");

  // Heat Loss State
  const [hlArea, setHlArea] = useState("");
  const [hlDeltaT, setHlDeltaT] = useState("");
  const [hlThickness, setHlThickness] = useState("");
  const [hlKValue, setHlKValue] = useState("0.04"); // Default for mineral wool

  // Material State
  const [mDiameter, setMDiameter] = useState("");
  const [mLength, setMLength] = useState("");
  const [mThickness, setMThickness] = useState("");

  // ROI State
  const [roiLoss, setRoiLoss] = useState(""); // kW heat loss reduced
  const [roiCost, setRoiCost] = useState("8.5"); // ₹ per kWh
  const [roiHours, setRoiHours] = useState("8760"); // Operating hours

  const heatLossResult = useMemo(() => {
    const a = Number(hlArea);
    const dt = Number(hlDeltaT);
    const t = Number(hlThickness) / 1000;
    const k = Number(hlKValue);
    if (!a || !dt || !t || !k) return null;
    return (k * a * dt) / t;
  }, [hlArea, hlDeltaT, hlThickness, hlKValue]);

  const materialResult = useMemo(() => {
    const d = Number(mDiameter) / 1000;
    const l = Number(mLength);
    const t = Number(mThickness) / 1000;
    if (!d || !l || !t) return null;
    const innerRadius = d / 2;
    const outerRadius = innerRadius + t;
    const volume = Math.PI * (Math.pow(outerRadius, 2) - Math.pow(innerRadius, 2)) * l;
    return volume;
  }, [mDiameter, mLength, mThickness]);

  const roiResult = useMemo(() => {
    const loss = Number(roiLoss);
    const cost = Number(roiCost);
    const hours = Number(roiHours);
    if (!loss || !cost || !hours) return null;
    return (loss / 1000) * cost * hours;
  }, [roiLoss, roiCost, roiHours]);

  return (
    <div className="engineering-suite">
      <div className="suite-tabs">
        <button className={activeTab === "heatloss" ? "active" : ""} onClick={() => setActiveTab("heatloss")}>🔥 Heat Loss</button>
        <button className={activeTab === "material" ? "active" : ""} onClick={() => setActiveTab("material")}>📏 Material</button>
        <button className={activeTab === "roi" ? "active" : ""} onClick={() => setActiveTab("roi")}>💰 ROI/Savings</button>
      </div>

      <div className="suite-content">
        <div className="inputs-panel">
          {activeTab === "heatloss" && (
            <div className="input-grid-premium">
              <div className="q-field"><label>Area (m²)</label><input type="number" value={hlArea} onChange={(e) => setHlArea(e.target.value)} /></div>
              <div className="q-field"><label>ΔT (°C)</label><input type="number" value={hlDeltaT} onChange={(e) => setHlDeltaT(e.target.value)} /></div>
              <div className="q-field"><label>Thick (mm)</label><input type="number" value={hlThickness} onChange={(e) => setHlThickness(e.target.value)} /></div>
              <div className="q-field"><label>K-Value</label><input type="number" value={hlKValue} onChange={(e) => setHlKValue(e.target.value)} /></div>
            </div>
          )}
          {activeTab === "material" && (
            <div className="input-grid-premium">
              <div className="q-field"><label>Dia (mm)</label><input type="number" value={mDiameter} onChange={(e) => setMDiameter(e.target.value)} /></div>
              <div className="q-field"><label>Length (m)</label><input type="number" value={mLength} onChange={(e) => setMLength(e.target.value)} /></div>
              <div className="q-field"><label>Thick (mm)</label><input type="number" value={mThickness} onChange={(e) => setMThickness(e.target.value)} /></div>
            </div>
          )}
          {activeTab === "roi" && (
            <div className="input-grid-premium">
              <div className="q-field"><label>Loss (W)</label><input type="number" value={roiLoss} onChange={(e) => setRoiLoss(e.target.value)} /></div>
              <div className="q-field"><label>₹/kWh</label><input type="number" value={roiCost} onChange={(e) => setRoiCost(e.target.value)} /></div>
              <div className="q-field"><label>Hours/Yr</label><input type="number" value={roiHours} onChange={(e) => setRoiHours(e.target.value)} /></div>
            </div>
          )}
        </div>

        <div className="result-panel-premium">
          <div className="result-display">
            {activeTab === "heatloss" && (
              <div className="res-card">
                <span>Total Heat Loss</span>
                <strong>{heatLossResult ? Math.round(heatLossResult).toLocaleString() + " W" : "---"}</strong>
              </div>
            )}
            {activeTab === "material" && (
              <div className="res-card">
                <span>Material Volume</span>
                <strong>{materialResult ? materialResult.toFixed(3) + " m³" : "---"}</strong>
              </div>
            )}
            {activeTab === "roi" && (
              <div className="res-card highlight">
                <span>Annual Savings</span>
                <strong>{roiResult ? "₹ " + Math.round(roiResult).toLocaleString() : "---"}</strong>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
