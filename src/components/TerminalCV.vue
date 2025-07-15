<template>
  <div class="terminal-container">
    <div class="terminal-header">
      <div class="terminal-buttons">
        <div class="terminal-button close"></div>
        <div class="terminal-button minimize"></div>
        <div class="terminal-button maximize"></div>
      </div>
      <div class="terminal-title">
        {{ personalData.name }} – Terminal CV
      </div>
    </div>
    <div class="terminal-window" ref="terminalWindow">
      <div
          v-for="(line, idx) in history"
          :key="idx"
          class="terminal-line"
      >
        <span
            class="terminal-prompt"
            v-if="line.type === 'command'"
        >{{ prompt }}</span
        >
        <div
            class="terminal-content"
            :class="line.class"
            v-html="line.content"
        ></div>
      </div>

      <div class="terminal-input-line">
        <span class="terminal-prompt">{{ prompt }}</span>
        <input
            ref="terminalInput"
            class="terminal-input"
            v-model="currentCommand"
            @keydown.enter="executeCommand"
            @keydown.up="navigateHistory(-1)"
            @keydown.down="navigateHistory(1)"
            @keydown.tab.prevent="autoComplete"
            autofocus
        />

      </div>
    </div>
  </div>
</template><script src="./TerminalCV.js"></script>