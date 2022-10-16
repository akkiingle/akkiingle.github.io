import { Container } from '@chakra-ui/react';
import Typewriter from 'typewriter-effect';

export default function Type(){
    return (
        <Typewriter 
        options={{
            strings:[ 'Full Stack web Developer....','Creative....'],
            autoStart: true,
            loop: true,
            deleteSpeed: 60,
        }}
        />
    )
}
