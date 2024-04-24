import React, { useState } from 'react';
import DisplayQuestionInfo from "./display_info";
const XMLFileReader = () => {
    const [xmlContent, setXmlContent] = useState('');

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        if (!file) return;

        const reader = new FileReader();

        reader.onload = (event) => {
            const xmlString = event.target.result;
            setXmlContent(xmlString);
        };

        reader.onerror = (event) => {
            console.error('Error reading the file:', event.target.error);
        };

        reader.readAsText(file);
    };

    return (
        <div>
            <input type="file" onChange={handleFileChange} accept=".xml" />
            <DisplayQuestionInfo xmlContent={xmlContent} />
        </div>
    );
};

// const DisplayQuestionInfo = ({ xmlContent }) => {
//     const [questionInfo, setQuestionInfo] = useState(null);
//
//     // Function to parse XML content and extract question name and tags
//     const extractQuestionInfo = (xmlContent) => {
//         const parser = new DOMParser();
//         const xmlDoc = parser.parseFromString(xmlContent, 'text/xml');
//
//         console.log(xmlDoc);
//         const questionNode = xmlDoc.querySelector('text');
//
//         if (!questionNode) {
//             console.error('No question node found in XML');
//             return;
//         }
//
//         const questionName = questionNode.querySelector('name text').textContent;
//         const tagsNode = questionNode.querySelector('tags');
//         const tags = Array.from(tagsNode.querySelectorAll('tag text')).map(tag => tag.textContent);
//
//         setQuestionInfo({
//             name: questionName,
//             tags: tags,
//             numOfTags: tags.length
//         });
//     };
//
//     // Call extractQuestionInfo when xmlContent changes
//     React.useEffect(() => {
//         if (xmlContent) {
//             extractQuestionInfo(xmlContent);
//         }
//     }, [xmlContent]);
//
//     return (
//         <div>
//             {questionInfo && (
//                 <div>
//                     <h2>Question Name: {questionInfo.name}</h2>
//                     <p>Tags: {questionInfo.tags.join(', ')}</p>
//                     <p>Number of Tags: {questionInfo.numOfTags}</p>
//                 </div>
//             )}
//         </div>
//     );
// };

export default XMLFileReader;
