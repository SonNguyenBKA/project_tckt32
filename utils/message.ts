import type {MessageParams} from "element-plus";

const TIMER = 2000

export const showMessage = (options: MessageParams) => {
    const customClass = 'message-with-progress'
    const duration = TIMER
    const message = ElMessage({
        ...options,
        customClass,
        duration
    })
    // const messageEl = document.querySelector(`.${customClass}`)
    // if (messageEl) {
    //     const progressBar = document.createElement('div')
    //     progressBar.className = 'message-progress'
    //     messageEl.appendChild(progressBar)
    //     progressBar.style.animation = `message-progress ${duration}ms linear`
    // }

    return message
}

export const messageError = (message: string) => {
    showMessage({
        message: message,
        type: 'error',
        grouping: true,
    })
}

export const messageInfo = (message: string) => {
    showMessage({
        message: message,
        type: 'info',
        grouping: true,
    })
}

export const messageWarning = (message: string) => {
    showMessage({
        message: message,
        type: 'warning',
        grouping: true,
    })
}

export const messageSuccess = (message: string) => {
    showMessage({
        message: message,
        type: 'success',
        grouping: true,
    })
}
