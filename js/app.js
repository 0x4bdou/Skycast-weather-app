const ICON_DARK  = 'data:image/svg+xml;base64,PCFET0NUWVBFIHN2ZyBQVUJMSUMgIi0vL1czQy8vRFREIFNWRyAxLjEvL0VOIiAiaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkIj4KCjwhLS0gVXBsb2FkZWQgdG86IFNWRyBSZXBvLCB3d3cuc3ZncmVwby5jb20sIFRyYW5zZm9ybWVkIGJ5OiBTVkcgUmVwbyBNaXhlciBUb29scyAtLT4KPHN2ZyB3aWR0aD0iODAwcHgiIGhlaWdodD0iODAwcHgiIHZpZXdCb3g9IjAgMCAxNiAxNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KCjxnIGlkPSJTVkdSZXBvX2JnQ2FycmllciIgc3Ryb2tlLXdpZHRoPSIwIi8+Cgo8ZyBpZD0iU1ZHUmVwb190cmFjZXJDYXJyaWVyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KCjxnIGlkPSJTVkdSZXBvX2ljb25DYXJyaWVyIj4gPHBhdGggZD0ibSA3LjUgMCBjIC0wLjI3NzM0NCAwIC0wLjUgMC4yMjI2NTYgLTAuNSAwLjUgdiAyIGMgMCAwLjI3NzM0NCAwLjIyMjY1NiAwLjUgMC41IDAuNSBoIDEgYyAwLjI3NzM0NCAwIDAuNSAtMC4yMjI2NTYgMC41IC0wLjUgdiAtMiBjIDAgLTAuMjc3MzQ0IC0wLjIyMjY1NiAtMC41IC0wLjUgLTAuNSB6IG0gLTQuNDQ5MjE5IDEuODQzNzUgYyAtMC4xMjg5MDYgMCAtMC4yNTM5MDYgMC4wNDY4NzUgLTAuMzUxNTYyIDAuMTQ0NTMxIGwgLTAuNzEwOTM4IDAuNzEwOTM4IGMgLTAuMTk1MzEyIDAuMTk1MzEyIC0wLjE5NTMxMiAwLjUwNzgxMiAwIDAuNzA3MDMxIGwgMS40MTc5NjkgMS40MTQwNjIgYyAwLjE5NTMxMiAwLjE5NTMxMyAwLjUwNzgxMiAwLjE5NTMxMyAwLjcwNzAzMSAwIGwgMC43MDcwMzEgLTAuNzA3MDMxIGMgMC4xOTUzMTMgLTAuMTk5MjE5IDAuMTk1MzEzIC0wLjUxMTcxOSAwIC0wLjcwNzAzMSBsIC0xLjQxNDA2MiAtMS40MTc5NjkgYyAtMC4xMDE1NjIgLTAuMDk3NjU2IC0wLjIyNjU2MiAtMC4xNDQ1MzEgLTAuMzU1NDY5IC0wLjE0NDUzMSB6IG0gOS44OTg0MzggMCBjIC0wLjEyODkwNyAwIC0wLjI1MzkwNyAwLjA0Njg3NSAtMC4zNTU0NjkgMC4xNDQ1MzEgbCAtMS40MTQwNjIgMS40MTc5NjkgYyAtMC4xOTUzMTMgMC4xOTUzMTIgLTAuMTk1MzEzIDAuNTA3ODEyIDAgMC43MDcwMzEgbCAwLjcwNzAzMSAwLjcwNzAzMSBjIDAuMTk5MjE5IDAuMTk1MzEzIDAuNTExNzE5IDAuMTk1MzEzIDAuNzA3MDMxIDAgbCAxLjQxNzk2OSAtMS40MTQwNjIgYyAwLjE5NTMxMiAtMC4xOTkyMTkgMC4xOTUzMTIgLTAuNTExNzE5IDAgLTAuNzA3MDMxIGwgLTAuNzEwOTM4IC0wLjcxMDkzOCBjIC0wLjA5NzY1NiAtMC4wOTc2NTYgLTAuMjIyNjU2IC0wLjE0NDUzMSAtMC4zNTE1NjIgLTAuMTQ0NTMxIHogbSAtNC45NDkyMTkgMi4xNjQwNjIgYyAtMi4xOTUzMTIgMCAtNCAxLjgwNDY4OCAtNCA0IGMgMCAyLjE5MTQwNyAxLjgwNDY4OCA0IDQgNCBzIDQgLTEuODA4NTkzIDQgLTQgYyAwIC0yLjE5NTMxMiAtMS44MDQ2ODggLTQgLTQgLTQgeiBtIC03LjUgMi45OTIxODggYyAtMC4yNzczNDQgMCAtMC41IDAuMjIyNjU2IC0wLjUgMC41IHYgMSBjIDAgMC4yNzczNDQgMC4yMjI2NTYgMC41IDAuNSAwLjUgaCAyIGMgMC4yNzczNDQgMCAwLjUgLTAuMjIyNjU2IDAuNSAtMC41IHYgLTEgYyAwIC0wLjI3NzM0NCAtMC4yMjI2NTYgLTAuNSAtMC41IC0wLjUgeiBtIDEzIDAgYyAtMC4yNzczNDQgMCAtMC41IDAuMjIyNjU2IC0wLjUgMC41IHYgMSBjIDAgMC4yNzczNDQgMC4yMjI2NTYgMC41IDAuNSAwLjUgaCAyIGMgMC4yNzczNDQgMCAwLjUgLTAuMjIyNjU2IDAuNSAtMC41IHYgLTEgYyAwIC0wLjI3NzM0NCAtMC4yMjI2NTYgLTAuNSAtMC41IC0wLjUgeiBtIC05Ljc0MjE4OCA0LjAzNTE1NiBjIC0wLjEyODkwNiAwIC0wLjI1MzkwNiAwLjA0Njg3NSAtMC4zNTE1NjIgMC4xNDQ1MzIgbCAtMS40MTc5NjkgMS40MTQwNjIgYyAtMC4xOTUzMTIgMC4xOTkyMTkgLTAuMTk1MzEyIDAuNTExNzE5IDAgMC43MDcwMzEgbCAwLjcxMDkzOCAwLjcxMDkzOCBjIDAuMTk1MzEyIDAuMTk1MzEyIDAuNTA3ODEyIDAuMTk1MzEyIDAuNzA3MDMxIDAgbCAxLjQxNDA2MiAtMS40MTc5NjkgYyAwLjE5NTMxMyAtMC4xOTUzMTIgMC4xOTUzMTMgLTAuNTA3ODEyIDAgLTAuNzA3MDMxIGwgLTAuNzA3MDMxIC0wLjcwNzAzMSBjIC0wLjEwMTU2MiAtMC4wOTc2NTcgLTAuMjI2NTYyIC0wLjE0NDUzMiAtMC4zNTU0NjkgLTAuMTQ0NTMyIHogbSA4LjQ4NDM3NiAwIGMgLTAuMTI4OTA3IDAgLTAuMjUzOTA3IDAuMDQ2ODc1IC0wLjM1NTQ2OSAwLjE0NDUzMiBsIC0wLjcwNzAzMSAwLjcwNzAzMSBjIC0wLjE5NTMxMyAwLjE5OTIxOSAtMC4xOTUzMTMgMC41MTE3MTkgMCAwLjcwNzAzMSBsIDEuNDE0MDYyIDEuNDE3OTY5IGMgMC4xOTkyMTkgMC4xOTUzMTIgMC41MTE3MTkgMC4xOTUzMTIgMC43MDcwMzEgMCBsIDAuNzEwOTM4IC0wLjcxMDkzOCBjIDAuMTk1MzEyIC0wLjE5NTMxMiAwLjE5NTMxMiAtMC41MDc4MTIgMCAtMC43MDcwMzEgbCAtMS40MTc5NjkgLTEuNDE0MDYyIGMgLTAuMDk3NjU2IC0wLjA5NzY1NyAtMC4yMjI2NTYgLTAuMTQ0NTMyIC0wLjM1MTU2MiAtMC4xNDQ1MzIgeiBtIC00Ljc0MjE4OCAxLjk2NDg0NCBjIC0wLjI3NzM0NCAwIC0wLjUgMC4yMjI2NTYgLTAuNSAwLjUgdiAyIGMgMCAwLjI3NzM0NCAwLjIyMjY1NiAwLjUgMC41IDAuNSBoIDEgYyAwLjI3NzM0NCAwIDAuNSAtMC4yMjI2NTYgMC41IC0wLjUgdiAtMiBjIDAgLTAuMjc3MzQ0IC0wLjIyMjY1NiAtMC41IC0wLjUgLTAuNSB6IG0gMCAwIiBmaWxsPSIjN2UxZGZiIi8+IDwvZz4KCjwvc3ZnPg==';
const ICON_LIGHT = 'data:image/svg+xml;base64,PCFET0NUWVBFIHN2ZyBQVUJMSUMgIi0vL1czQy8vRFREIFNWRyAxLjEvL0VOIiAiaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkIj4KCjwhLS0gVXBsb2FkZWQgdG86IFNWRyBSZXBvLCB3d3cuc3ZncmVwby5jb20sIFRyYW5zZm9ybWVkIGJ5OiBTVkcgUmVwbyBNaXhlciBUb29scyAtLT4KPHN2ZyB3aWR0aD0iODAwcHgiIGhlaWdodD0iODAwcHgiIHZpZXdCb3g9IjAgMCAxNiAxNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KCjxnIGlkPSJTVkdSZXBvX2JnQ2FycmllciIgc3Ryb2tlLXdpZHRoPSIwIi8+Cgo8ZyBpZD0iU1ZHUmVwb190cmFjZXJDYXJyaWVyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KCjxnIGlkPSJTVkdSZXBvX2ljb25DYXJyaWVyIj4gPHBhdGggZD0ibSA2LjgxNjQwNiAxLjAxMTcxOSBjIC0zLjMwODU5NCAwLjU3MDMxMiAtNS44Mzk4NDQgMy40NzI2NTYgLTUuODM5ODQ0IDYuOTQxNDA2IGMgMCAzLjg3MTA5NCAzLjE2MDE1NyA3LjA0Njg3NSA3LjAyMzQzOCA3LjA0Njg3NSBjIDEuNzUzOTA2IDAgMy4zNjcxODggLTAuNjYwMTU2IDQuNTk3NjU2IC0xLjczNDM3NSBjIDAuNjA1NDY5IC0wLjUyNzM0NCAwLjM3MTA5NCAtMS41MTU2MjUgLTAuNDA2MjUgLTEuNzIyNjU2IGMgLTIuODEyNSAtMC43MzQzNzUgLTQuOTE0MDYyIC0zLjMwNDY4OCAtNC45MTQwNjIgLTYuMzY3MTg4IGMgMCAtMC45ODQzNzUgMC4yMjI2NTYgLTEuOTEwMTU2IDAuNjEzMjgxIC0yLjc1NzgxMiBjIDAuMzM5ODQ0IC0wLjczMDQ2OSAtMC4yODEyNSAtMS41MzkwNjMgLTEuMDc0MjE5IC0xLjQwNjI1IHogbSAwIDAiIGZpbGw9IiM3ZTFkZmIiLz4gPC9nPgoKPC9zdmc+';

// ─────────────────────────────────────────────
//  SKYCAST — app.js
// ─────────────────────────────────────────────

const WEATHER_ICONS = {
  '01d':'☀️','01n':'🌙','02d':'⛅','02n':'🌙',
  '03d':'☁️','03n':'☁️','04d':'☁️','04n':'☁️',
  '09d':'🌧️','09n':'🌧️','10d':'🌦️','10n':'🌧️',
  '11d':'⛈️','11n':'⛈️','13d':'❄️','13n':'❄️',
  '50d':'🌫️','50n':'🌫️',
};

const AQI_LABELS = { 1:'Good', 2:'Fair', 3:'Moderate', 4:'Poor', 5:'Very Poor' };
const DAYS = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];

// ── State ─────────────────────────────────────
let langCache = {};
let API_KEY   = localStorage.getItem('owm_key')      || '808596ff3f56bbba8683587bb4a86868';
let CUR_LANG  = localStorage.getItem('skycast_lang') || 'en';
let CUR_CITY  = '';
let lastLat   = null;
let lastLon   = null;

// ── Init ──────────────────────────────────────
window.addEventListener('DOMContentLoaded', async () => {

  // Theme
  const savedTheme = localStorage.getItem('skycast_theme') || 'dark';
  document.documentElement.setAttribute('data-theme', savedTheme);
  document.getElementById('toggleIcon').src = savedTheme === 'dark' ? ICON_DARK : ICON_LIGHT;
  document.getElementById('themeToggle').addEventListener('click', toggleTheme);

  // Lang button
  document.getElementById('langBtn').addEventListener('click', (e) => {
    e.stopPropagation();
    const menu = document.getElementById('langMenu');
    const btn  = document.getElementById('langBtn');
    const rect = btn.getBoundingClientRect();
    const isHidden = menu.classList.contains('hidden');
    if (isHidden) {
      menu.classList.remove('hidden');
      menu.style.top  = (rect.bottom + 8) + 'px';
      menu.style.left = (rect.right - menu.offsetWidth) + 'px';
      if (parseFloat(menu.style.left) < 8) menu.style.left = '8px';
    } else {
      menu.classList.add('hidden');
    }
  });

  document.addEventListener('click', () => {
    document.getElementById('langMenu').classList.add('hidden');
  });

  if (!API_KEY) document.getElementById('apiNotice').classList.remove('hidden');

  await applyLang(CUR_LANG);

  document.getElementById('cityInput').addEventListener('keydown', e => {
    if (e.key === 'Enter') fetchWeather();
  });

  // Live clock
  updateClock();
  setInterval(updateClock, 1000);

  // Start canvas (idle = clear)
  initCanvas();
  drawWeatherEffect('clear');
});

// ── Live clock ────────────────────────────────
function updateClock() {
  const now = new Date();
  const h = String(now.getHours()).padStart(2,'0');
  const m = String(now.getMinutes()).padStart(2,'0');
  const s = String(now.getSeconds()).padStart(2,'0');
  document.getElementById('liveClock').textContent = `${h}:${m}:${s}`;
}

// ── Language ──────────────────────────────────
async function applyLang(code) {
  try {
    const res = await fetch(`lang/${code}.json`);
    if (!res.ok) throw new Error();
    langCache = await res.json();
  } catch {
    const res = await fetch('lang/en.json');
    langCache = await res.json();
    code = 'en';
  }
  CUR_LANG = code;
  const label = code === 'zh_cn' ? 'ZH' : code.toUpperCase();
  document.getElementById('langLabel').textContent      = label;
  document.getElementById('searchBtn').textContent      = langCache.search;
  document.getElementById('cityInput').placeholder     = langCache.placeholder;
  document.getElementById('idleText').textContent       = langCache.idle;
  document.getElementById('labelHumidity').textContent  = langCache.humidity;
  document.getElementById('labelWind').textContent      = langCache.wind;
  document.getElementById('labelVis').textContent       = langCache.visibility;
  document.getElementById('forecastTitle').textContent  = langCache.forecast;
  document.getElementById('loadingText').textContent    = langCache.loading;
  document.getElementById('logoTagline').textContent    = langCache.tagline;
  document.getElementById('footerBuilt').textContent    = langCache.footer;
  document.getElementById('labelSunrise').textContent   = langCache.sunTitle    || 'Sunrise & Sunset';
  document.getElementById('labelSunriseTime').textContent = langCache.sunrise   || 'Sunrise';
  document.getElementById('labelSunsetTime').textContent  = langCache.sunset    || 'Sunset';
  document.getElementById('labelAqi').textContent       = langCache.airQuality  || 'Air Quality';
  document.documentElement.dir = code === 'ar' ? 'rtl' : 'ltr';
  document.querySelectorAll('.lang-menu-portal button').forEach(btn => {
    btn.classList.toggle('active-lang', (btn.getAttribute('onclick')||'').includes(`'${code}'`));
  });
}

async function setLang(code, label) {
  localStorage.setItem('skycast_lang', code);
  document.getElementById('langMenu').classList.add('hidden');
  await applyLang(code);
  if (CUR_CITY) fetchWeather();
}

// ── Theme ─────────────────────────────────────
function toggleTheme() {
  const html  = document.documentElement;
  const next  = html.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
  html.setAttribute('data-theme', next);
  localStorage.setItem('skycast_theme', next);
  document.getElementById('toggleIcon').src = next === 'dark' ? ICON_DARK : ICON_LIGHT;
}

// ── API key ───────────────────────────────────
function saveApiKey() {
  const val = document.getElementById('apiKeyInput').value.trim();
  if (!val) return;
  API_KEY = val;
  localStorage.setItem('owm_key', val);
  document.getElementById('apiNotice').classList.add('hidden');
}

// ── UI state ──────────────────────────────────
function setState(name) {
  ['Idle','Loading','Error','Result'].forEach(s => {
    document.getElementById('state'+s).classList.toggle('hidden', s.toLowerCase() !== name);
  });
}

// ── Fetch weather ─────────────────────────────
async function fetchWeather() {
  const city = document.getElementById('cityInput').value.trim();
  if (!city) return;
  if (!API_KEY) {
    document.getElementById('apiNotice').classList.remove('hidden');
    setState('error');
    document.getElementById('errorMsg').textContent = 'Please enter your API key first.';
    return;
  }
  CUR_CITY = city;
  setState('loading');
  try {
    const base   = 'https://api.openweathermap.org/data/2.5';
    const params = `q=${encodeURIComponent(city)}&appid=${API_KEY}&units=metric&lang=${CUR_LANG}`;
    const [curRes, foreRes] = await Promise.all([
      fetch(`${base}/weather?${params}`),
      fetch(`${base}/forecast?${params}`),
    ]);
    if (!curRes.ok) {
      if (curRes.status === 401) throw new Error('Invalid API key.');
      if (curRes.status === 404) throw new Error(`City "${city}" not found.`);
      throw new Error('Unknown error.');
    }
    const current  = await curRes.json();
    const forecast = await foreRes.json();

    // Store coords for AQI call
    lastLat = current.coord.lat;
    lastLon = current.coord.lon;

    renderCurrent(current);
    renderForecast(forecast);
    renderSunTimes(current);
    await renderAQI(lastLat, lastLon);

    setState('result');
    drawWeatherEffect(current.weather[0].main.toLowerCase());
  } catch(err) {
    setState('error');
    document.getElementById('errorMsg').textContent = '⚠️ ' + (err.message || 'Failed to fetch.');
    drawWeatherEffect('clear');
  }
}

// ── Render current ────────────────────────────
function renderCurrent(data) {
  const t = langCache;
  document.getElementById('rCity').textContent =
    data.name.split(' ').map(w => w.charAt(0).toUpperCase()+w.slice(1).toLowerCase()).join(' ');
  document.getElementById('rCountry').textContent = data.sys.country;
  const locale = CUR_LANG==='zh_cn'?'zh-CN': CUR_LANG==='ar'?'ar-DZ': CUR_LANG;
  const now = new Date();
  document.getElementById('rDate').textContent =
    now.toLocaleDateString(locale,{weekday:'long',month:'long',day:'numeric'}) +
    ' · ' + now.toLocaleTimeString(locale,{hour:'2-digit',minute:'2-digit'});
  document.getElementById('rTemp').textContent      = Math.round(data.main.temp)+'°';
  document.getElementById('rIcon').textContent      = WEATHER_ICONS[data.weather[0].icon]||'🌡️';
  document.getElementById('rCondition').textContent = capitalise(data.weather[0].description);
  document.getElementById('rFeels').textContent     =
    `${t.feels||'Feels like'} ${Math.round(data.main.feels_like)}°C · High ${Math.round(data.main.temp_max)}° / Low ${Math.round(data.main.temp_min)}°`;
  document.getElementById('rHumidity').textContent  = data.main.humidity+'%';
  document.getElementById('rWind').textContent      = Math.round(data.wind.speed*3.6)+' km/h';
  document.getElementById('rVis').textContent       = (data.visibility/1000).toFixed(1)+' km';
}

// ── Render sunrise/sunset ─────────────────────
function renderSunTimes(data) {
  const locale = CUR_LANG==='zh_cn'?'zh-CN': CUR_LANG==='ar'?'ar-DZ': CUR_LANG;
  const fmt = t => new Date(t*1000).toLocaleTimeString(locale,{hour:'2-digit',minute:'2-digit'});
  const rise   = data.sys.sunrise;
  const set    = data.sys.sunset;
  const now    = Math.floor(Date.now()/1000);

  document.getElementById('rSunrise').textContent = fmt(rise);
  document.getElementById('rSunset').textContent  = fmt(set);

  // Arc progress: 0 = sunrise, 1 = sunset
  const total    = set - rise;
  const elapsed  = Math.min(Math.max(now - rise, 0), total);
  const progress = elapsed / total;               // 0 → 1
  const arcLen   = 160;
  const offset   = arcLen * (1 - progress);

  document.getElementById('sunArcProgress').style.strokeDashoffset = offset;

  // Move dot along arc (parabolic path approximation)
  const t2  = progress;
  const cx  = 10 + t2 * 100;           // x: 10 → 110
  const cy  = 55 - Math.sin(t2*Math.PI)*55; // y: follows arc
  document.getElementById('sunDot').setAttribute('cx', cx.toFixed(1));
  document.getElementById('sunDot').setAttribute('cy', cy.toFixed(1));
}

// ── Render AQI ────────────────────────────────
async function renderAQI(lat, lon) {
  try {
    const res  = await fetch(`https://api.openweathermap.org/data/2.5/air_pollution?lat=${lat}&lon=${lon}&appid=${API_KEY}`);
    const data = await res.json();
    const aqi  = data.list[0].main.aqi;
    const comp = data.list[0].components;

    document.getElementById('rAqiNumber').textContent = aqi;

    const badge = document.getElementById('rAqiBadge');
    badge.textContent = AQI_LABELS[aqi] || '—';
    badge.className   = `aqi-badge aqi-${aqi}`;

    // Bar: fill covers right portion, marker moves left-to-right
    const pct = ((aqi-1)/4)*100;
    document.getElementById('rAqiBar').style.transform    = `scaleX(${(100-pct)/100})`;
    document.getElementById('rAqiMarker').style.left      = pct+'%';

    // Pollutant pills
    const pills = [
      {k:'PM2.5', v:comp.pm2_5},
      {k:'PM10',  v:comp.pm10},
      {k:'NO₂',   v:comp.no2},
      {k:'O₃',    v:comp.o3},
      {k:'CO',    v:comp.co},
    ];
    document.getElementById('rAqiPollutants').innerHTML =
      pills.map(p=>`<span class="aqi-pill">${p.k} ${p.v!=null?p.v.toFixed(1):'—'}</span>`).join('');
  } catch {
    document.getElementById('rAqiNumber').textContent = '—';
    document.getElementById('rAqiBadge').textContent  = 'N/A';
  }
}

// ── Render forecast ───────────────────────────
function renderForecast(data) {
  const dailyMap = {};
  data.list.forEach(item => {
    const d   = new Date(item.dt*1000);
    const key = d.toDateString();
    const h   = d.getHours();
    if (!dailyMap[key] || Math.abs(h-12) < Math.abs(new Date(dailyMap[key].dt*1000).getHours()-12))
      dailyMap[key] = item;
  });
  document.getElementById('forecastRow').innerHTML = Object.values(dailyMap).slice(0,5).map(item => {
    const d = new Date(item.dt*1000);
    return `<div class="forecast-item">
      <div class="fc-day">${DAYS[d.getDay()]}</div>
      <div class="fc-icon">${WEATHER_ICONS[item.weather[0].icon]||'🌡️'}</div>
      <div class="fc-temp">${Math.round(item.main.temp)}°</div>
      <div class="fc-low">${Math.round(item.main.temp_min)}° / ${Math.round(item.main.temp_max)}°</div>
    </div>`;
  }).join('');
}

// ─────────────────────────────────────────────
//  CANVAS WEATHER ANIMATIONS
// ─────────────────────────────────────────────
let canvasParticles = [];
let canvasAnim = null;
let currentEffect = 'clear';

function initCanvas() {
  const canvas = document.getElementById('weatherCanvas');
  canvas.width  = window.innerWidth;
  canvas.height = window.innerHeight;
  window.addEventListener('resize', () => {
    canvas.width  = window.innerWidth;
    canvas.height = window.innerHeight;
    drawWeatherEffect(currentEffect);
  });
}

function drawWeatherEffect(condition) {
  currentEffect = condition;
  if (canvasAnim) cancelAnimationFrame(canvasAnim);
  canvasParticles = [];

  const canvas = document.getElementById('weatherCanvas');
  const ctx    = canvas.getContext('2d');
  ctx.clearRect(0,0,canvas.width,canvas.height);

  if (condition.includes('rain') || condition.includes('drizzle')) {
    startRain(canvas, ctx);
  } else if (condition.includes('snow')) {
    startSnow(canvas, ctx);
  } else if (condition.includes('clear')) {
    startClear(canvas, ctx);
  } else if (condition.includes('cloud')) {
    startCloudy(canvas, ctx);
  } else if (condition.includes('thunder') || condition.includes('storm')) {
    startRain(canvas, ctx, true);
  } else {
    startClear(canvas, ctx);
  }
}

// Rain
function startRain(canvas, ctx, heavy=false) {
  const count = heavy ? 250 : 140;
  for (let i=0; i<count; i++) {
    canvasParticles.push({
      x: Math.random()*canvas.width,
      y: Math.random()*canvas.height,
      len: Math.random()*15+8,
      speed: Math.random()*6+8,
      opacity: Math.random()*0.4+0.15,
      width: Math.random()*0.8+0.3,
    });
  }
  function animate() {
    ctx.clearRect(0,0,canvas.width,canvas.height);
    canvasParticles.forEach(p => {
      ctx.beginPath();
      ctx.moveTo(p.x, p.y);
      ctx.lineTo(p.x-p.len*0.2, p.y+p.len);
      ctx.strokeStyle = `rgba(174,214,241,${p.opacity})`;
      ctx.lineWidth = p.width;
      ctx.stroke();
      p.y += p.speed;
      p.x -= p.speed*0.2;
      if (p.y > canvas.height) { p.y = -p.len; p.x = Math.random()*canvas.width; }
    });
    canvasAnim = requestAnimationFrame(animate);
  }
  animate();
}

// Snow
function startSnow(canvas, ctx) {
  for (let i=0; i<120; i++) {
    canvasParticles.push({
      x: Math.random()*canvas.width,
      y: Math.random()*canvas.height,
      r: Math.random()*3+1,
      speed: Math.random()*1.2+0.4,
      drift: Math.random()*0.6-0.3,
      opacity: Math.random()*0.5+0.2,
      angle: Math.random()*Math.PI*2,
    });
  }
  function animate() {
    ctx.clearRect(0,0,canvas.width,canvas.height);
    canvasParticles.forEach(p => {
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI*2);
      ctx.fillStyle = `rgba(220,240,255,${p.opacity})`;
      ctx.fill();
      p.y += p.speed;
      p.x += Math.sin(p.angle)*p.drift;
      p.angle += 0.02;
      if (p.y > canvas.height+5) { p.y = -5; p.x = Math.random()*canvas.width; }
    });
    canvasAnim = requestAnimationFrame(animate);
  }
  animate();
}

// Clear — subtle floating sparkles
function startClear(canvas, ctx) {
  for (let i=0; i<60; i++) {
    canvasParticles.push({
      x: Math.random()*canvas.width,
      y: Math.random()*canvas.height,
      r: Math.random()*1.5+0.3,
      opacity: Math.random()*0.3+0.05,
      speed: Math.random()*0.3+0.1,
      pulse: Math.random()*Math.PI*2,
    });
  }
  function animate() {
    ctx.clearRect(0,0,canvas.width,canvas.height);
    canvasParticles.forEach(p => {
      p.pulse += 0.02;
      const o = p.opacity*(0.6+0.4*Math.sin(p.pulse));
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI*2);
      ctx.fillStyle = `rgba(167,139,250,${o})`;
      ctx.fill();
      p.y -= p.speed;
      if (p.y < -5) { p.y = canvas.height+5; p.x = Math.random()*canvas.width; }
    });
    canvasAnim = requestAnimationFrame(animate);
  }
  animate();
}

// Cloudy — drifting semi-transparent wisps
function startCloudy(canvas, ctx) {
  for (let i=0; i<18; i++) {
    canvasParticles.push({
      x: Math.random()*canvas.width,
      y: Math.random()*canvas.height*0.6,
      r: Math.random()*80+40,
      speed: Math.random()*0.2+0.05,
      opacity: Math.random()*0.04+0.02,
    });
  }
  function animate() {
    ctx.clearRect(0,0,canvas.width,canvas.height);
    canvasParticles.forEach(p => {
      const grad = ctx.createRadialGradient(p.x,p.y,0,p.x,p.y,p.r);
      grad.addColorStop(0, `rgba(180,180,210,${p.opacity})`);
      grad.addColorStop(1, 'transparent');
      ctx.beginPath();
      ctx.arc(p.x,p.y,p.r,0,Math.PI*2);
      ctx.fillStyle = grad;
      ctx.fill();
      p.x += p.speed;
      if (p.x > canvas.width+p.r) p.x = -p.r;
    });
    canvasAnim = requestAnimationFrame(animate);
  }
  animate();
}

// ── Utils ─────────────────────────────────────
function capitalise(str) {
  return str.charAt(0).toUpperCase()+str.slice(1);
}
