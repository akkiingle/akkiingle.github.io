import chakraUI from "../../Image/skills/chakraUI.svg"
import express from "../../Image/skills/express.svg"
import redux from "../../Image/skills/redux.svg"
import nodejs from "../../Image/skills/nodejs.svg"
import html from '../../Image/skills/html.svg'
import css from '../../Image/skills/css.svg'
import javascript from '../../Image/skills/javascript.svg'
import react from '../../Image/skills/react.svg'
import typescript from '../../Image/skills/typescript.svg'
import mongoDB from '../../Image/skills/mongoDB.svg'
import git from '../../Image/skills/git.svg'
import vsCode from '../../Image/skills/vsCode.svg'
import replit from '../../Image/skills/replit.svg'
import aws from '../../Image/skills/aws.svg'
import postman from "../../Image/skills/postman.svg"

export const skillsImage = (skill) => {
    const skillID = skill.toLowerCase();
    switch (skillID) {
        case 'postman':
            return postman;
        case 'replit':
            return replit;
        case 'aws':
            return aws;
        case 'vscode':
            return vsCode;
        case 'chakraui':
            return chakraUI;
        case 'express':
            return express;
        case 'redux':
            return redux;
        case 'nodejs':
            return nodejs;
        case 'html':
            return html;
        case 'css':
            return css;
        case 'javascript':
            return javascript;
        case 'react':
            return react;
        case 'typescript':
            return typescript;
        case 'mongodb':
            return mongoDB;
        case 'git':
            return git;
        default:
            break;
    }
}