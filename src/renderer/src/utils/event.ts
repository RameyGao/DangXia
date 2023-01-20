import { ipcRenderer } from 'electron';

/**
 * 向根 webContents 发送 ipc 消息
 * @param channel
 * @param data
 */
export const emit = (channel: string, data?: Record<string, any>) => ipcRenderer.send(channel, data);
