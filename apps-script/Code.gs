const SPREADSHEET_ID = '1A5KPdW6lq3zd9n2HEJ1JGKG7N8bxjP6-J7dxtALruCg';
const SHEET_NAME = 'Leads';

function doGet() {
  return json_({ ok: true, service: 'Mercado de Empresas - Leads' });
}

function doPost(e) {
  try {
    const data = parse_(e);
    if (!data.nome || !data.email && !data.whatsapp) {
      return json_({ ok: false, error: 'Informe nome e pelo menos e-mail ou WhatsApp.' });
    }

    const ss = SpreadsheetApp.openById(SPREADSHEET_ID);
    const sheet = ss.getSheetByName(SHEET_NAME);
    if (!sheet) throw new Error('Aba Leads não encontrada.');

    const now = new Date();
    sheet.appendRow([
      now,
      clean_(data.nome),
      clean_(data.empresa),
      clean_(data.cargo),
      clean_(data.whatsapp),
      clean_(data.email),
      clean_(data.treinamento),
      clean_(data.mensagem),
      clean_(data.origem),
      clean_(data.utm_source),
      clean_(data.utm_medium),
      clean_(data.utm_campaign),
      clean_(data.utm_content),
      clean_(data.pagina),
      'Novo',
      '',
      'Realizar primeiro contato',
      '',
      ''
    ]);

    return json_({ ok: true, message: 'Lead registrado.' });
  } catch (err) {
    console.error(err);
    return json_({ ok: false, error: 'Não foi possível registrar o contato.' });
  }
}

function parse_(e) {
  if (!e) return {};
  if (e.postData && e.postData.contents) {
    try { return JSON.parse(e.postData.contents); } catch (_) {}
  }
  return e.parameter || {};
}

function clean_(value) {
  if (value === null || value === undefined) return '';
  let s = String(value).trim().slice(0, 3000);
  if (/^[=+\-@]/.test(s)) s = "'" + s;
  return s;
}

function json_(obj) {
  return ContentService.createTextOutput(JSON.stringify(obj))
    .setMimeType(ContentService.MimeType.JSON);
}
