import React, { useState, useEffect } from 'react';

const DisplayQuestionInfo = ({ xmlContent }) => {
    const [questions, setQuestions] = useState([]);

    // Function to parse XML content and extract questions
    useEffect(() => {
        if (xmlContent) {
            const parser = new DOMParser();
            const xmlDoc = parser.parseFromString(xmlContent, 'text/xml');
            const questionNodes = xmlDoc.querySelectorAll('question');

            const extractedQuestions = Array.from(questionNodes).map(questionNode => {
                const nameNodes = questionNode.querySelectorAll('questiontext text');
                const name = nameNodes && nameNodes.length > 0 && nameNodes[0].textContent
                    ? nameNodes[0].textContent.replace(/<[^>]+>/g, '').trim()
                    : '';

                const tagsNode = questionNode.querySelector('tags');
                const tags = tagsNode ? Array.from(tagsNode.querySelectorAll('tag text')).map(tag => tag.textContent.trim()) : [];
                return {
                    name: name,
                    tags: tags,
                };
            });

            setQuestions(extractedQuestions);
        }
    }, [xmlContent]);

    return (
        <div>
            <h2>List of Questions:</h2>
            <ul>
                {questions.map((question, index) => (
                    <li key={index}>
                        <h3>Question {index + 1}</h3>
                        <div>Question Name: {question.name}</div>
                        <div>Tags: {question.tags.join(', ')}</div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default DisplayQuestionInfo;
