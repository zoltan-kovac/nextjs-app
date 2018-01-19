import Document, {Head, Main, NextScript} from 'next/document'
import flush from 'styled-jsx/server'
import stylesheet from 'styles/main.less'

export default class MyDocument extends Document {
    static getInitialProps({ renderPage }) {
        const { html, head, errorHtml, chunks } = renderPage()
        const styles = flush()

        return { html, head, errorHtml, chunks, styles }
    }

    render() {
        return (
            <html>
                <Head>
                    {/*
                      * For development you can use this instead of link to extracted css
                      * <style dangerouslySetInnerHTML={{ __html: stylesheet }} />
                    */}
                    <style dangerouslySetInnerHTML={{ __html: stylesheet }} /> {/* <style jsx global>{ stylesheet }</style> */}
                </Head>
                <body>
                    <Main/>
                    <NextScript/>
                </body>
            </html>
        )
    }
}