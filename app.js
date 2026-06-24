const STORAGE_KEY = "techlemonade.gi42001.diagnostics.v1";
const DRAFT_KEY = "techlemonade.gi42001.draft.v1";

const sections = [
  {
    id: "empresa",
    title: "Perfil da empresa",
    short: "Empresa",
    fields: [
      { id: "cliente", label: "Nome do cliente", type: "text", value: "Lemonildo Mercadinhos", required: true },
      { id: "segmento", label: "Segmento", type: "text", value: "Supermercado / Varejo", required: true },
      { id: "data", label: "Data da reuniao", type: "date" },
      { id: "participantes", label: "Participantes", type: "textarea", wide: true, hint: "Nome, cargo e papel na decisao." },
      { id: "fundacao", label: "Fundacao", type: "text" },
      { id: "lojas", label: "Numero de lojas", type: "number", min: 0 },
      { id: "pessoas", label: "Numero de pessoas", type: "number", min: 0, value: 30 },
      { id: "receita", label: "Receita anual aproximada", type: "text", hint: "Use faixas se o cliente preferir nao abrir o numero exato." },
      { id: "historia", label: "Contexto e historia", type: "textarea", wide: true }
    ]
  },
  {
    id: "inovacao",
    title: "Inovacao atual",
    short: "Inovacao",
    fields: [
      { id: "comoInova", label: "Como a empresa inova hoje?", type: "choice", options: ["Formalizado", "Ad-hoc", "Nao inova", "Nao sabe explicar"], score: { "Formalizado": 3, "Ad-hoc": 2, "Nao inova": 0, "Nao sabe explicar": 0 } },
      { id: "responsavelInovacao", label: "Existe responsavel ou equipe?", type: "choice", options: ["Sim", "Parcial", "Nao"], score: { "Sim": 3, "Parcial": 2, "Nao": 0 } },
      { id: "ultimaInovacao", label: "Ultima inovacao significativa", type: "textarea", wide: true },
      { id: "tempoExecucao", label: "Tempo do conceito a execucao", type: "text" },
      { id: "ideiasAno", label: "Ideias implementadas por ano", type: "number", min: 0 },
      { id: "problemasAtuais", label: "Principais problemas e limitacoes", type: "textarea", wide: true }
    ]
  },
  {
    id: "digital",
    title: "Transformacao digital",
    short: "Digital",
    fields: [
      { id: "tecnologias", label: "Tecnologias atuais", type: "textarea", wide: true, hint: "PDV, estoque, ERP, CRM, WhatsApp, redes sociais, BI, e-commerce." },
      { id: "maturidadeDigital", label: "Nivel de maturidade digital", type: "choice", options: ["Alto", "Medio", "Baixo"], score: { "Alto": 3, "Medio": 2, "Baixo": 0 } },
      { id: "sistemasIntegrados", label: "Sistemas integrados?", type: "choice", options: ["Sim", "Parcial", "Nao"], score: { "Sim": 3, "Parcial": 2, "Nao": 0 } },
      { id: "planosDigitais", label: "Planos de transformacao digital", type: "textarea", wide: true },
      { id: "bloqueadoresDigitais", label: "Bloqueadores", type: "textarea", wide: true, hint: "Tecnologia, equipe, orcamento, dados, cultura, tempo." }
    ]
  },
  {
    id: "expectativas",
    title: "Gatilho e expectativas",
    short: "Expectativas",
    fields: [
      { id: "porQueAgora", label: "Por que agora?", type: "textarea", wide: true },
      { id: "resultadoEsperado", label: "Resultado esperado nas palavras do cliente", type: "textarea", wide: true },
      { id: "realismo", label: "A expectativa parece realista?", type: "choice", options: ["Sim", "Meio termo", "Irrealista"], score: { "Sim": 3, "Meio termo": 1, "Irrealista": -2 } },
      { id: "roiEsperado", label: "ROI esperado", type: "textarea", hint: "Receita, margem, reducao de custo, produtividade, perdas, ruptura, ticket medio.", wide: true },
      { id: "rolEsperado", label: "RoL e outros retornos", type: "textarea", hint: "Return on Learning, maturidade, autonomia, qualidade de decisao, cultura.", wide: true }
    ]
  },
  {
    id: "viabilidade",
    title: "Viabilidade",
    short: "Viabilidade",
    fields: [
      { id: "horasSemana", label: "Disponibilidade semanal da equipe", type: "number", min: 0, hint: "Horas por semana." },
      { id: "pontoFocal", label: "Ponto focal", type: "text" },
      { id: "pontoFocalParticipa", label: "Ponto focal tem autonomia?", type: "choice", options: ["Sim", "Parcial", "Nao"], score: { "Sim": 3, "Parcial": 1, "Nao": -2 } },
      { id: "decisores", label: "Stakeholders decisores", type: "textarea", wide: true },
      { id: "orcamento", label: "Orcamento disponivel", type: "text" },
      { id: "capacidadeImplementar", label: "Capacidade interna para implementar depois", type: "choice", options: ["Alta", "Media", "Baixa"], score: { "Alta": 3, "Media": 1, "Baixa": -2 } }
    ]
  },
  {
    id: "escopo",
    title: "Alinhamento com a ficha",
    short: "Escopo",
    fields: [
      { id: "escopoAceito", label: "Escopo GI42001 foi compreendido?", type: "choice", options: ["Sim", "Parcialmente", "Nao"], score: { "Sim": 3, "Parcialmente": 1, "Nao": -2 } },
      { id: "querImplementacao", label: "Cliente espera implementacao tecnica?", type: "choice", options: ["Nao", "Talvez", "Sim"], score: { "Nao": 3, "Talvez": 0, "Sim": -3 } },
      { id: "timelineOk", label: "Sprints de ate 14 dias fazem sentido?", type: "choice", options: ["Sim", "Ajustar", "Nao"], score: { "Sim": 3, "Ajustar": 1, "Nao": -1 } },
      { id: "etapasPrevistas", label: "Etapas previstas", type: "textarea", wide: true, value: "Etapa 01 - Descoberta\nEtapa 02 - Priorizacao\nEtapa 03 - Proposta de valor\nEtapa 04 - Modelagem, se aplicavel" },
      { id: "foraEscopo", label: "Pontos fora de escopo identificados", type: "textarea", wide: true }
    ]
  },
  {
    id: "redflags",
    title: "Red flags",
    short: "Riscos",
    fields: [
      { id: "riscoEquipeOcupada", label: "Equipe muito ocupada", type: "choice", options: ["Nao", "Talvez", "Sim"], score: { "Nao": 2, "Talvez": 0, "Sim": -2 } },
      { id: "riscoSemDecisor", label: "Decisor ausente", type: "choice", options: ["Nao", "Talvez", "Sim"], score: { "Nao": 2, "Talvez": 0, "Sim": -2 } },
      { id: "riscoExpectativa", label: "Expectativa irrealista", type: "choice", options: ["Nao", "Talvez", "Sim"], score: { "Nao": 2, "Talvez": 0, "Sim": -2 } },
      { id: "riscoDados", label: "Dados sensiveis ou LGPD", type: "choice", options: ["Baixo", "Medio", "Alto"], score: { "Baixo": 2, "Medio": 0, "Alto": -1 } },
      { id: "observacoesRisco", label: "Observacoes de risco", type: "textarea", wide: true }
    ]
  },
  {
    id: "proximos",
    title: "Proximos passos",
    short: "Acoes",
    fields: [
      { id: "propostaAte", label: "Enviar proposta ate", type: "date" },
      { id: "materiaisCliente", label: "Materiais que o cliente enviara", type: "textarea", wide: true },
      { id: "dataInicio", label: "Data desejada de inicio", type: "date" },
      { id: "followup", label: "Contato de follow-up", type: "text" },
      { id: "proximasAcoes", label: "Proximas acoes acordadas", type: "textarea", wide: true }
    ]
  },
  {
    id: "analise",
    title: "Analise pos-reuniao",
    short: "Decisao",
    fields: [
      { id: "viabilidadeProjeto", label: "Viabilidade do projeto", type: "choice", options: ["Alta", "Media", "Baixa"], score: { "Alta": 3, "Media": 1, "Baixa": -2 } },
      { id: "confiancaImplementacao", label: "Confianca na implementacao pelo cliente", type: "choice", options: ["Alta", "Media", "Baixa"], score: { "Alta": 3, "Media": 1, "Baixa": -2 } },
      { id: "recomendacao", label: "Recomendacao consultiva", type: "choice", options: ["Avancar com proposta", "Refinar escopo", "Validar viabilidade", "Nao avancar agora"], score: { "Avancar com proposta": 3, "Refinar escopo": 1, "Validar viabilidade": 0, "Nao avancar agora": -2 } },
      { id: "justificativa", label: "Justificativa", type: "textarea", wide: true },
      { id: "resumoExecutivo", label: "Resumo executivo", type: "textarea", wide: true, hint: "Sera usado no Markdown exportado." }
    ]
  }
];

let state = {
  currentStep: 0,
  data: {},
  theme: localStorage.getItem("tl-theme") || "dark"
};

const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => Array.from(document.querySelectorAll(selector));

function init() {
  document.documentElement.dataset.theme = state.theme;
  state.data = loadDraft();
  applyDefaults();
  renderNav();
  renderForm();
  renderHistory();
  bindActions();
  updateAll();
}

function applyDefaults() {
  sections.flatMap((section) => section.fields).forEach((field) => {
    if (state.data[field.id] === undefined && field.value !== undefined) {
      state.data[field.id] = field.value;
    }
  });
}

function bindActions() {
  $("#prevStep").addEventListener("click", () => goStep(state.currentStep - 1));
  $("#nextStep").addEventListener("click", () => goStep(state.currentStep + 1));
  $("#saveDiagnostic").addEventListener("click", saveDiagnostic);
  $("#newDiagnostic").addEventListener("click", newDiagnostic);
  $("#themeToggle").addEventListener("click", toggleTheme);
  $$("[data-export]").forEach((button) => {
    button.addEventListener("click", () => exportData(button.dataset.export));
  });
  window.addEventListener("beforeunload", saveDraft);
}

function renderNav() {
  $("#stepNav").innerHTML = sections.map((section, index) => `
    <button class="step-button ${index === state.currentStep ? "active" : ""}" type="button" data-step="${index}">
      <span class="step-number">${index + 1}</span>
      <span>
        <strong>${section.short}</strong>
        <small>${section.title}</small>
      </span>
      <small>${sectionCompletion(section)}%</small>
    </button>
  `).join("");

  $$(".step-button").forEach((button) => {
    button.addEventListener("click", () => goStep(Number(button.dataset.step)));
  });
}

function renderForm() {
  const section = sections[state.currentStep];
  $("#sectionCounter").textContent = `Etapa ${state.currentStep + 1} de ${sections.length}`;
  $("#currentSectionTitle").textContent = section.title;
  $("#diagnosticForm").innerHTML = section.fields.map(renderField).join("");

  section.fields.forEach((field) => {
    if (field.type === "choice") {
      $$(`input[name="${field.id}"]`).forEach((input) => {
        input.addEventListener("change", () => {
          updateField(section, field.id, input.value, { autoAdvance: true });
        });
      });
      return;
    }
    const input = document.getElementById(field.id);
    input.addEventListener("input", () => {
      updateField(section, field.id, input.value);
    });
    input.addEventListener("change", () => {
      updateField(section, field.id, input.value, { autoAdvance: true });
    });
  });
}

function updateField(section, fieldId, value, options = {}) {
  const completionBefore = sectionCompletion(section);
  state.data[fieldId] = value;
  const completionAfter = sectionCompletion(section);
  updateAll();
  if (!options.autoAdvance) return;
  maybeAdvanceAfterCompletion(section, completionBefore, completionAfter);
}

function maybeAdvanceAfterCompletion(section, completionBefore, completionAfter) {
  const sectionIndex = sections.findIndex((candidate) => candidate.id === section.id);
  const hasNextSection = sectionIndex >= 0 && sectionIndex < sections.length - 1;
  if (!hasNextSection || completionBefore >= 100 || completionAfter < 100) return;

  window.setTimeout(() => {
    if (state.currentStep === sectionIndex && sectionCompletion(section) === 100) {
      goStep(sectionIndex + 1);
    }
  }, 420);
}

function renderField(field) {
  const wide = field.wide || field.type === "textarea" || field.type === "choice" ? "wide" : "";
  const hint = field.hint ? `<small>${field.hint}</small>` : "";
  const value = escapeHtml(state.data[field.id] ?? "");

  if (field.type === "textarea") {
    return `
      <div class="field ${wide}">
        <label for="${field.id}">${field.label}</label>
        ${hint}
        <textarea id="${field.id}" ${field.required ? "required" : ""}>${value}</textarea>
      </div>
    `;
  }

  if (field.type === "choice") {
    return `
      <div class="field ${wide}">
        <label>${field.label}</label>
        ${hint}
        <div class="choice-grid">
          ${field.options.map((option) => `
            <label class="choice">
              <input type="radio" name="${field.id}" value="${escapeHtml(option)}" ${state.data[field.id] === option ? "checked" : ""}>
              <span>${option}</span>
            </label>
          `).join("")}
        </div>
      </div>
    `;
  }

  return `
    <div class="field ${wide}">
      <label for="${field.id}">${field.label}</label>
      ${hint}
      <input id="${field.id}" type="${field.type}" value="${value}" ${field.min !== undefined ? `min="${field.min}"` : ""} ${field.required ? "required" : ""}>
    </div>
  `;
}

function updateAll() {
  saveDraft();
  renderNav();
  updateHero();
  updateScores();
  updateAlerts();
}

function updateHero() {
  $("#clientHero").textContent = state.data.cliente || "Cliente sem nome";
  const completion = totalCompletion();
  $("#completionMetric").textContent = `${completion}%`;
  const scores = calculateScores();
  $("#riskMetric").textContent = scores.riskLabel;
  $("#goMetric").textContent = decisionLabel(scores.total);
}

function updateScores() {
  const scores = calculateScores();
  $("#scoreRing").style.setProperty("--score", scores.total);
  $("#scoreValue").textContent = scores.total;
  $("#scoreLabel").textContent = decisionLabel(scores.total);
  $("#scoreText").textContent = scores.scoreText;

  const barData = [
    ["Inovacao", scores.innovation],
    ["Digital", scores.digital],
    ["Viabilidade", scores.viability],
    ["Escopo", scores.scope],
    ["Risco controlado", scores.riskControl]
  ];

  $("#scoreBars").innerHTML = barData.map(([label, value]) => `
    <div class="bar-row">
      <div class="bar-label"><span>${label}</span><span>${value}%</span></div>
      <div class="bar-track"><div class="bar-fill" style="width:${value}%"></div></div>
    </div>
  `).join("");
}

function updateAlerts() {
  const alerts = [];
  const danger = [];

  if (state.data.querImplementacao === "Sim") danger.push("Cliente espera implementacao tecnica. Reforce que a GI42001 estrutura, planeja e capacita, mas nao executa codigo/sistemas.");
  if (state.data.realismo === "Irrealista") danger.push("Expectativa de resultado parece irrealista. Converta para hipoteses mensuraveis antes da proposta.");
  if (state.data.pontoFocalParticipa === "Nao") danger.push("Ponto focal sem autonomia. Alto risco de travamento decisorio.");
  if (state.data.capacidadeImplementar === "Baixa") alerts.push("Baixa capacidade interna de implementacao. Roadmap precisa prever parceiros e responsaveis.");
  if (state.data.riscoDados === "Alto") alerts.push("Dados sensiveis/LGPD em nivel alto. Evite coletar dados pessoais desnecessarios e documente finalidade.");
  if (!state.data.resultadoEsperado) alerts.push("Resultado esperado ainda nao registrado nas palavras do cliente.");
  if (!state.data.porQueAgora) alerts.push("Gatilho da demanda ainda nao esta claro. Sem isso, a proposta tende a ficar generica.");
  if (!state.data.decisores) alerts.push("Decisores ainda nao mapeados. Valide quem aprova escopo, investimento e prioridades.");

  const items = [...danger.map((text) => ({ text, type: "danger" })), ...alerts.map((text) => ({ text, type: "" }))];
  $("#alertsList").innerHTML = items.length
    ? items.map((item) => `<li class="${item.type}">${item.text}</li>`).join("")
    : `<li>Nenhum alerta critico ate agora. Continue validando evidencia e escopo.</li>`;
}

function calculateScores() {
  const innovation = normalizeScore(["comoInova", "responsavelInovacao"], 6);
  const digital = normalizeScore(["maturidadeDigital", "sistemasIntegrados"], 6);
  const viability = normalizeScore(["pontoFocalParticipa", "capacidadeImplementar", "viabilidadeProjeto", "confiancaImplementacao"], 12);
  const scope = normalizeScore(["escopoAceito", "querImplementacao", "timelineOk"], 9);
  const riskControl = normalizeScore(["riscoEquipeOcupada", "riscoSemDecisor", "riscoExpectativa", "riscoDados", "realismo"], 10);
  const total = Math.round((innovation * .18) + (digital * .16) + (viability * .26) + (scope * .22) + (riskControl * .18));
  const riskLabel = total >= 72 ? "Baixo" : total >= 48 ? "Medio" : "Alto";
  const scoreText = total >= 72
    ? "Bom sinal para proposta, desde que as evidencias estejam documentadas."
    : total >= 48
      ? "Ha potencial, mas a proposta deve enderecar riscos e lacunas explicitamente."
      : "Antes de propor, valide escopo, decisores, disponibilidade e expectativa de resultado.";

  return { innovation, digital, viability, scope, riskControl, total, riskLabel, scoreText };
}

function normalizeScore(fieldIds, maxPositive) {
  let value = 0;
  fieldIds.forEach((fieldId) => {
    const field = sections.flatMap((section) => section.fields).find((candidate) => candidate.id === fieldId);
    if (!field || !field.score) return;
    value += field.score[state.data[fieldId]] ?? 0;
  });
  const shifted = Math.max(0, value);
  return Math.min(100, Math.round((shifted / maxPositive) * 100));
}

function sectionCompletion(section) {
  const filled = section.fields.filter((field) => {
    const value = state.data[field.id];
    return value !== undefined && String(value).trim() !== "";
  }).length;
  return Math.round((filled / section.fields.length) * 100);
}

function totalCompletion() {
  const fields = sections.flatMap((section) => section.fields);
  const filled = fields.filter((field) => {
    const value = state.data[field.id];
    return value !== undefined && String(value).trim() !== "";
  }).length;
  return Math.round((filled / fields.length) * 100);
}

function decisionLabel(score) {
  if (score >= 72) return "Avancar";
  if (score >= 48) return "Refinar";
  return "Validar";
}

function goStep(index) {
  state.currentStep = Math.max(0, Math.min(sections.length - 1, index));
  renderForm();
  renderNav();
  updateAll();
  scrollToCurrentSection();
}

function scrollToCurrentSection() {
  const target = $(".form-card");
  if (!target) return;
  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  target.scrollIntoView({
    behavior: prefersReducedMotion ? "auto" : "smooth",
    block: "start"
  });
}

function saveDiagnostic() {
  const records = loadRecords();
  const id = state.data.id || crypto.randomUUID();
  const now = new Date().toISOString();
  const record = {
    id,
    createdAt: state.data.createdAt || now,
    updatedAt: now,
    data: { ...state.data, id, createdAt: state.data.createdAt || now }
  };
  const next = [record, ...records.filter((item) => item.id !== id)].slice(0, 30);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
  state.data = { ...record.data };
  saveDraft();
  renderHistory();
  showToast("Diagnostico salvo no historico local.");
}

function newDiagnostic() {
  if (!confirm("Criar um novo diagnostico? O rascunho atual sera limpo, mas diagnosticos salvos continuam no historico.")) return;
  state.data = {};
  applyDefaults();
  state.currentStep = 0;
  saveDraft();
  renderForm();
  updateAll();
  showToast("Novo diagnostico iniciado.");
}

function loadRecords() {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]");
  } catch {
    return [];
  }
}

function loadDraft() {
  try {
    return JSON.parse(localStorage.getItem(DRAFT_KEY) || "{}");
  } catch {
    return {};
  }
}

function saveDraft() {
  localStorage.setItem(DRAFT_KEY, JSON.stringify(state.data));
}

function renderHistory() {
  const records = loadRecords();
  $("#historyList").innerHTML = records.length ? records.map((record) => {
    const client = record.data.cliente || "Sem cliente";
    const date = new Date(record.updatedAt).toLocaleString("pt-BR");
    return `
      <div class="history-item">
        <button class="history-load" type="button" data-load="${record.id}">
          <strong>${escapeHtml(client)}</strong>
          <small>${date}</small>
        </button>
        <div class="history-actions">
          <button class="icon-button ghost" type="button" title="Excluir" data-delete="${record.id}">
            <svg><use href="#icon-trash"></use></svg>
          </button>
        </div>
      </div>
    `;
  }).join("") : `<p class="empty">Nenhum diagnostico salvo ainda.</p>`;

  $$("[data-load]").forEach((button) => {
    button.addEventListener("click", () => {
      const record = loadRecords().find((item) => item.id === button.dataset.load);
      if (!record) return;
      state.data = { ...record.data };
      state.currentStep = 0;
      saveDraft();
      renderForm();
      updateAll();
      showToast("Diagnostico carregado.");
    });
  });

  $$("[data-delete]").forEach((button) => {
    button.addEventListener("click", () => {
      if (!confirm("Excluir este diagnostico salvo?")) return;
      const next = loadRecords().filter((item) => item.id !== button.dataset.delete);
      localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
      renderHistory();
      showToast("Diagnostico excluido.");
    });
  });
}

function exportData(format) {
  const client = slugify(state.data.cliente || "diagnostico");
  const stamp = new Date().toISOString().slice(0, 10);
  if (format === "json") {
    download(`${client}_diagnostico_gi42001_${stamp}.json`, JSON.stringify(buildExportObject(), null, 2), "application/json");
  }
  if (format === "csv") {
    download(`${client}_diagnostico_gi42001_${stamp}.csv`, buildCsv(), "text/csv;charset=utf-8");
  }
  if (format === "markdown") {
    download(`${client}_diagnostico_gi42001_${stamp}.md`, buildMarkdown(), "text/markdown;charset=utf-8");
  }
  showToast(`Exportacao ${format.toUpperCase()} gerada.`);
}

function buildExportObject() {
  return {
    app: "Diagnostico GI42001 | Tech Lemonade",
    exportedAt: new Date().toISOString(),
    scores: calculateScores(),
    completion: totalCompletion(),
    data: state.data
  };
}

function buildCsv() {
  const rows = [["secao", "campo", "valor"]];
  sections.forEach((section) => {
    section.fields.forEach((field) => {
      rows.push([section.title, field.label, state.data[field.id] || ""]);
    });
  });
  return rows.map((row) => row.map(csvCell).join(";")).join("\n");
}

function buildMarkdown() {
  const scores = calculateScores();
  const lines = [
    `# Diagnostico GI42001 - ${state.data.cliente || "Cliente"}`,
    "",
    `**Exportado em:** ${new Date().toLocaleString("pt-BR")}`,
    `**Indice de prontidao:** ${scores.total}/100`,
    `**Decisao sugerida:** ${decisionLabel(scores.total)}`,
    `**Risco:** ${scores.riskLabel}`,
    "",
    "## Resumo Executivo",
    state.data.resumoExecutivo || "Resumo ainda nao preenchido.",
    "",
    "## Scores",
    `- Inovacao: ${scores.innovation}%`,
    `- Digital: ${scores.digital}%`,
    `- Viabilidade: ${scores.viability}%`,
    `- Escopo: ${scores.scope}%`,
    `- Risco controlado: ${scores.riskControl}%`,
    "",
    "## Diagnostico"
  ];

  sections.forEach((section) => {
    lines.push("", `### ${section.title}`, "");
    section.fields.forEach((field) => {
      lines.push(`**${field.label}:**`);
      lines.push(String(state.data[field.id] || "Nao informado").trim());
      lines.push("");
    });
  });

  lines.push("## Alertas Consultivos");
  const alertTexts = $$("#alertsList li").map((li) => `- ${li.textContent.trim()}`);
  lines.push(...alertTexts);
  lines.push("", "## Observacao de Escopo");
  lines.push("Este diagnostico apoia a consultoria GI42001-6. Ele nao representa promessa de implementacao tecnica, garantia de ROI ou substituicao da equipe interna.");

  return lines.join("\n");
}

function download(filename, content, mimeType) {
  const blob = new Blob([content], { type: mimeType });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = filename;
  document.body.appendChild(link);
  link.click();
  link.remove();
  URL.revokeObjectURL(url);
}

function csvCell(value) {
  const text = String(value).replaceAll('"', '""');
  return `"${text}"`;
}

function slugify(value) {
  return String(value)
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "_")
    .replace(/^_+|_+$/g, "") || "diagnostico";
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function toggleTheme() {
  state.theme = state.theme === "dark" ? "light" : "dark";
  document.documentElement.dataset.theme = state.theme;
  localStorage.setItem("tl-theme", state.theme);
}

function showToast(message) {
  const toast = $("#toast");
  toast.textContent = message;
  toast.classList.add("show");
  clearTimeout(showToast.timeout);
  showToast.timeout = setTimeout(() => toast.classList.remove("show"), 2600);
}

init();
