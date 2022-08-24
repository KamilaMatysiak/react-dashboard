import React from 'react'
import { Image, Inject, Link, QuickToolbar, Toolbar, RichTextEditorComponent, HtmlEditor } from '@syncfusion/ej2-react-richtexteditor';
import { EditorData } from '../data/dummy';
import { Header } from '../components'

const Editor = () => {
  return (
    <div className='m-2 md:m-10 mt-24 md:p-10 p-2 bg-white rounded-3xl'>
      <Header category="App" title="Editor"/>
      <RichTextEditorComponent>
        <EditorData/>
        <Inject services={[HtmlEditor, Toolbar, Image, Link, QuickToolbar]} />
      </RichTextEditorComponent>
    </div>
  )
}

export default Editor