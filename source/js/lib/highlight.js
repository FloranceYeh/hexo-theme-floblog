document.addEventListener('DOMContentLoaded', function () {
  const codeBlocks = document.querySelectorAll('figure.highlight');

  const MAX_HEIGHT = themeConfig.highlight.max_height || 500;

  codeBlocks.forEach(block => {
    let lang = 'Code';
    if (block.getAttribute('class')) {
      const classes = block.getAttribute('class').split(' ');
      classes.forEach(cls => {
        if (cls !== 'highlight' && cls !== 'figure') {
          lang = cls;
        }
      });
    }

    const toolbar = document.createElement('div');
    toolbar.className = 'code-toolbar';

    const langLabel = document.createElement('span');
    langLabel.className = 'code-lang';
    langLabel.innerText = lang.toUpperCase();
    toolbar.appendChild(langLabel);

    const actions = document.createElement('div');
    actions.className = 'code-actions';

    const copyBtn = document.createElement('button');
    copyBtn.className = 'copy-btn';
    copyBtn.innerText = 'Copy';
    copyBtn.addEventListener('click', () => {
      let code = block.querySelector('td.code').innerText; 

      navigator.clipboard.writeText(code).then(() => {
        copyBtn.innerText = 'Copied!';
        setTimeout(() => copyBtn.innerText = 'Copy', 2000);
      });
    });
    actions.appendChild(copyBtn);

    const foldBtn = document.createElement('button');
    foldBtn.className = 'fold-btn';
    foldBtn.innerText = '-';

    foldBtn.addEventListener('click', () => {
      block.classList.toggle('code-collapsed');
      if (block.classList.contains('code-collapsed')) {
        foldBtn.innerText = '+';
      } else {
        foldBtn.innerText = '-';
      }
    });
    actions.appendChild(foldBtn);

    toolbar.appendChild(actions);

    block.parentNode.insertBefore(toolbar, block);
    
    const wrapper = document.createElement('div');
    wrapper.className = 'code-wrapper';
    
    block.parentNode.insertBefore(wrapper, toolbar);
    wrapper.appendChild(toolbar);
    wrapper.appendChild(block);

    setTimeout(() => {
      const blockHeight = block.offsetHeight;
      
      const heightInfo = document.createElement('span');
      heightInfo.className = 'code-height-info';
      heightInfo.innerText = `(${Math.round(blockHeight)}px)`;
      foldBtn.parentNode.insertBefore(heightInfo, foldBtn);
      
      if (blockHeight > MAX_HEIGHT) {
        block.classList.add('code-collapsed');
        block.classList.add('code-auto-collapsed');
        foldBtn.innerText = '+';
      }
    }, 10);
  });
});