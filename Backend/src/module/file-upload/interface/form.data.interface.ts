export type FileInfo = {
    fileUrl: string;
};

export type GetFileResponse = Pick<FileInfo, 'fileUrl'>;
export type GetFilesResponse = {
    files: FileInfo[];
};
