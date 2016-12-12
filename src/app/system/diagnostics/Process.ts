
declare var electron: any;

export class Process {

    public static Start(path: string): void {
        console.log(`Process start: '${path}'`);
        electron.remote.shell.openExternal(path);
    }
}