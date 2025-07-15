// src/components/TerminalCV.js
import personalData from '@/data/personalData'
import commands from '@/data/commands'

export default {
    name: 'TerminalCV',
    data() {
        return {
            personalData,
            availableCommands: commands,
            prompt: 'user:~$',
            currentCommand: '',
            history: [],
            commandHistory: [],
            historyIndex: -1
        }
    },
    mounted() {
        this.showWelcomeMessage()
        this.focusInput()
    },
    updated() {
        this.focusInput()
    },
    methods: {
        showWelcomeMessage() {
            const lines = [
                { type: 'output', content: `<span class="text-success">Welcome to my Terminal CV!</span>` },
                { type: 'output', content: `<span class="text-info">I’m ${this.personalData.name} – ${this.personalData.title}</span>` },
                { type: 'output', content: `<span class="text-muted">Type "help" to see available commands</span>` },
                { type: 'output', content: '' }
            ]
            this.history.push(...lines)
        },
        executeCommand() {
            const cmd = this.currentCommand.trim().toLowerCase()
            this.history.push({ type: 'command', content: this.currentCommand, class: 'text-success' })
            if (cmd && this.commandHistory.at(-1) !== cmd) {
                this.commandHistory.push(cmd)
            }
            this.historyIndex = -1
            this.processCommand(cmd)
            this.currentCommand = ''
            this.$nextTick(this.scrollToBottom)
        },
        processCommand(cmd) {
            if (!cmd) return this.addOutput('')
            switch (cmd) {
                case 'help':   return this.showHelp()
                case 'about':  return this.showAbout()
                case 'contact':return this.showContact()
                case 'skill':  return this.showSkills()
                case 'exp':    return this.showExperience()
                case 'edu':    return this.showEducation()
                case 'proj':   return this.showProjects()
                case 'cls':    return this.clearTerminal()
                case 'cv':     return this.downloadCV()
                default:
                    this.addOutput(`<span class="text-error">Unknown command: ${cmd}</span>`)
                    this.addOutput(`<span class="text-muted">Type "help" to see available commands</span>`)
            }
        },
        showHelp() {
            this.addOutput('<span class="text-info">Available commands:</span>')
            this.addOutput('')
            for (const [c, info] of Object.entries(this.availableCommands)) {
                this.addOutput(`<span class="text-success">${c}</span> – ${info.description}`)
            }
            this.addOutput('')
            this.addOutput('<span class="text-muted">Use ↑/↓ to navigate history, Tab to autocomplete</span>')
        },
        showAbout() {
            this.addOutput('<span class="text-info">About me:</span>')
            this.addOutput(''); this.addOutput(this.personalData.about)
        },
        showContact() {
            this.addOutput('<span class="text-info">Contact info:</span>')
            this.addOutput('')
            this.addOutput(`<span class="text-success">Email:</span> ${this.personalData.email}`)
            this.addOutput(`<span class="text-success">Phone:</span> ${this.personalData.phone}`)
            this.addOutput(`<span class="text-success">Location:</span> ${this.personalData.location}`)
            this.addOutput(`<span class="text-success">Website:</span> ${this.personalData.website}`)
            this.addOutput(`<span class="text-success">GitHub:</span> ${this.personalData.github}`)
            this.addOutput(`<span class="text-success">LinkedIn:</span> ${this.personalData.linkedin}`)
        },
        showSkills() {
            this.addOutput('<span class="text-info">Tech skills:</span>')
            this.addOutput('')
            for (const [cat, list] of Object.entries(this.personalData.skills)) {
                this.addOutput(`<span class="text-success">${cat}:</span> ${list.join(', ')}`)
                this.addOutput('')
            }
        },
        showExperience() {
            this.addOutput('<span class="text-info">Work experience:</span>')
            this.addOutput('')
            this.personalData.experience.forEach((job, i) => {
                this.addOutput(`<span class="text-success">${job.title}</span>`)
                this.addOutput(`<span class="text-warning">${job.company}</span> | ${job.period}`)
                this.addOutput(job.description)
                if (i < this.personalData.experience.length - 1) this.addOutput('')
            })
        },
        showEducation() {
            this.addOutput('<span class="text-info">Education:</span>')
            this.addOutput('')
            this.personalData.education.forEach((ed, i) => {
                this.addOutput(`<span class="text-success">${ed.degree}</span>`)
                this.addOutput(`<span class="text-warning">${ed.school}</span> | ${ed.period}`)
                this.addOutput(ed.description)
                if (i < this.personalData.education.length - 1) this.addOutput('')
            })
        },
        showProjects() {
            this.addOutput('<span class="text-info">Projects:</span>')
            this.addOutput('')
            this.personalData.projects.forEach((p, i) => {
                this.addOutput(`<span class="text-success">${p.name}</span>`)
                this.addOutput(`<span class="text-warning">Tech:</span> ${p.tech}`)
                this.addOutput(p.description)
                if (i < this.personalData.projects.length - 1) this.addOutput('')
            })
        },
        clearTerminal() {
            this.history = []
            this.showWelcomeMessage()
        },
        downloadCV() {
            this.addOutput('<span class="text-info">Downloading CV…</span>')
            this.addOutput('<span class="text-success">Done!</span>')
            this.addOutput('<span class="text-muted">(PDF download to be implemented)</span>')
        },
        addOutput(html) {
            this.history.push({ type: 'output', content: html, class: '' })
        },
        navigateHistory(dir) {
            if (!this.commandHistory.length) return
            if (dir < 0 && this.historyIndex < this.commandHistory.length - 1) {
                this.historyIndex++
            } else if (dir > 0 && this.historyIndex > -1) {
                this.historyIndex--
            }
            this.currentCommand =
                this.historyIndex === -1
                    ? ''
                    : this.commandHistory.at(-1 - this.historyIndex)
        },
        autoComplete() {
            const inp = this.currentCommand.toLowerCase()
            if (!inp) return
            const matches = Object.keys(this.availableCommands).filter(c => c.startsWith(inp))
            if (matches.length === 1) {
                this.currentCommand = matches[0]
            } else if (matches.length > 1) {
                this.addOutput(`<span class="text-warning">Matches:</span> ${matches.join(', ')}`)
            }
        },
        scrollToBottom() {
            const win = this.$refs.terminalWindow
            if (win) win.scrollTop = win.scrollHeight
        },
        focusInput() {
            this.$nextTick(() => this.$refs.terminalInput?.focus())
        }
    }
}