import { Viewer, Worker } from '@react-pdf-viewer/core';
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';

export const Reader = () => {
    const defaultLayoutPluginInstance = defaultLayoutPlugin();

    return (
        <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.js">
            <div
                className='mt-7 ring-1 ring-border overflow-hidden rounded-md'
                style={{
                    height: '75vh',
                    width: '100%',
                    marginLeft: 'auto',
                    marginRight: 'auto',
                }}
            >
                <Viewer fileUrl="assets/example/pdf/Application Software I.pdf" plugins={[defaultLayoutPluginInstance]} />
            </div>
        </Worker>
    )
}