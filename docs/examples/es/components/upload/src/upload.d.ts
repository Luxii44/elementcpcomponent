export declare class upload {
}
export declare const getFileType: (fileName: string) => any;
export declare const getMIME: (the_url: string) => Promise<string>;
export declare const checkFileType: (mime: string) => "image" | "word" | undefined;
