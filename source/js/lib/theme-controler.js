(function(){
  const LS_THEME = 'floblog-theme';
  const LS_HUE = 'floblog-hue';
  const LS_MODE = 'floblog-mode';

  let PRESET_HUE = {};

  function buildPresetHueMapping(){
    PRESET_HUE = {};
    document.querySelectorAll('.preset').forEach(btn => {
      const name = btn.getAttribute('data-theme');
      if(!name) return;
      const dh = btn.getAttribute('data-hue');
      if(dh && !isNaN(Number(dh))){
        PRESET_HUE[name] = Number(dh);
        return;
      }
      const style = btn.getAttribute('style') || '';
      const m = style.match(/hsl\((\d+(?:\.\d+)?)/i);
      if(m && m[1]){
        PRESET_HUE[name] = Math.round(Number(m[1]));
        return;
      }
      try{
        const comp = window.getComputedStyle(btn).backgroundColor;
        const hue = rgbStringToHue(comp);
        if(hue != null) PRESET_HUE[name] = Math.round(hue);
      }catch(e){}
    });
  }

  function rgbStringToHue(rgb){
    // rgb(...) or rgba(...)
    if(!rgb || typeof rgb !== 'string') return null;
    const m = rgb.match(/rgba?\(([^)]+)\)/i);
    if(!m) return null;
    const parts = m[1].split(',').map(s => Number(s.trim()));
    if(parts.length < 3 || parts.some(isNaN)) return null;
    const r = parts[0]/255, g = parts[1]/255, b = parts[2]/255;
    const max = Math.max(r,g,b), min = Math.min(r,g,b);
    let h = 0;
    if(max === min) h = 0;
    else if(max === r) h = (60 * ((g - b) / (max - min)) + 360) % 360;
    else if(max === g) h = (60 * ((b - r) / (max - min)) + 120) % 360;
    else if(max === b) h = (60 * ((r - g) / (max - min)) + 240) % 360;
    return h;
  }

  function setCSSHue(h){
    if(h == null) return;
    const hnum = Math.round(Number(h));
    document.documentElement.style.setProperty('--theme-primary-color', `hsl(${hnum}, 65%, 45%)`);
    document.documentElement.style.setProperty('--theme-secondary-color', `hsl(${hnum}, 60%, 80%)`);
    try{ localStorage.setItem(LS_HUE, String(hnum)); }catch(e){}
  }

  function applyTheme(name){
    if(!name) return;
    document.documentElement.setAttribute('data-theme', name);
    // Apply preset hue only when user has not set a custom hue
    try{
      const existingHue = localStorage.getItem(LS_HUE);
      if(!existingHue && PRESET_HUE[name]){
        setCSSHue(PRESET_HUE[name]);
      }
    }catch(e){
      if(PRESET_HUE[name]) setCSSHue(PRESET_HUE[name]);
    }
    try{ localStorage.setItem(LS_THEME, name); }catch(e){}
  }

  function applyMode(mode){
    if(mode === 'dark'){
      document.documentElement.setAttribute('data-theme-mode', 'dark');
    } else {
      document.documentElement.setAttribute('data-theme-mode', 'light');
    }
    try{ localStorage.setItem(LS_MODE, mode); }catch(e){}
  }

  function resetToDefaults(){
    try{ localStorage.removeItem(LS_THEME); localStorage.removeItem(LS_HUE); localStorage.removeItem(LS_MODE); }catch(e){}
    location.reload();
  }

  function initCardControls(){
    const body = document.getElementById('theme-card-body');
    const toggle = document.getElementById('theme-card-toggle');
    const resetBtn = document.getElementById('theme-reset');
    const hue = document.getElementById('theme-hue-slider');
    const mode = document.getElementById('theme-mode-toggle');
    const modeLabel = document.querySelector('.mode-label');

    if(toggle && body){
      toggle.addEventListener('click', ()=>{
        const opened = body.style.display !== 'none';
        body.style.display = opened ? 'none' : 'block';
        toggle.innerHTML = opened ? '<i class="fa-solid fa-plus">' : '<i class="fa-solid fa-minus"></i>';
      });
    }

    if(resetBtn) resetBtn.addEventListener('click', resetToDefaults);

    if(hue){
      hue.addEventListener('input', e=>{
        setCSSHue(e.target.value);
      });
      try{
        const savedHue = localStorage.getItem(LS_HUE);
        if(savedHue) hue.value = savedHue;
      }catch(e){}
    }

    if(mode){
      mode.addEventListener('change', e=>{
        const isDark = e.target.checked;
        applyMode(isDark? 'dark' : 'light');
        if(modeLabel) modeLabel.textContent = isDark? 'Dark' : 'Light';
      });
      try{
        const savedMode = localStorage.getItem(LS_MODE);
        if(savedMode){
          const isDark = savedMode === 'dark';
          mode.checked = isDark;
          if(modeLabel) modeLabel.textContent = isDark? 'Dark' : 'Light';
        }
      }catch(e){}
    }

    document.querySelectorAll('.preset').forEach(btn=>{
      btn.addEventListener('click', ()=>{
        const t = btn.getAttribute('data-theme');
        if(t) applyTheme(t);
        if(hue && PRESET_HUE[t]){ hue.value = PRESET_HUE[t]; setCSSHue(PRESET_HUE[t]); }
      });
    });
  }

  function init(){
    let savedTheme = null;
    try{ savedTheme = localStorage.getItem(LS_THEME); }catch(e){}
    try{ buildPresetHueMapping(); }catch(e){}
    applyTheme(savedTheme);

    try{
      const savedHue = localStorage.getItem(LS_HUE);
      if(savedHue) setCSSHue(savedHue);
    }catch(e){}

    try{
      const savedMode = localStorage.getItem(LS_MODE);
      if(savedMode) applyMode(savedMode);
    }catch(e){}

    document.querySelectorAll('.theme-switcher').forEach(holder => {
      const btn = holder.querySelector('#theme-toggle');
      const palette = holder.querySelector('.theme-palette');
      if(btn){
        btn.addEventListener('click', function(e){
          e.stopPropagation();
          holder.classList.toggle('open');
        });
      }
      if(palette){
        palette.querySelectorAll('.swatch').forEach(s => {
          s.addEventListener('click', function(e){
            const t = s.getAttribute('data-theme');
            applyTheme(t);
            if(PRESET_HUE[t]){ setCSSHue(PRESET_HUE[t]); const slider = document.getElementById('theme-hue-slider'); if(slider) slider.value = PRESET_HUE[t]; }
            document.querySelectorAll('.theme-switcher.open').forEach(h=>h.classList.remove('open'));
          });
        });
      }
    });

    document.addEventListener('click', function(){
      document.querySelectorAll('.theme-switcher.open').forEach(h=>h.classList.remove('open'));
    });

    initCardControls();
  }

  if(document.readyState === 'loading'){
    document.addEventListener('DOMContentLoaded', init);
  } else init();
})();
