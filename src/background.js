import {useWindowSize} from "react-use";
import Confetti from "react-confetti";
import React from "react";
import * as path from "path";
import moment from "moment";

function getNumberOfDay() {
    const date = moment();
    return date.day();
}

const IMAGES = [
    { id: 1, src: '1.jpg', title: 'bday image 1', description: 'posh life'},
    { id: 2, src: '2.jpg', title: 'bday image 2', description: 'champagne'},
    { id: 3, src: '3.jpg', title: 'bday image 3', description: 'confetti'},
    { id: 4, src: '4.jpg', title: 'bday image 4', description: 'happybday'},
];



function Background() {
    const { width, height } = useWindowSize();
    const image = IMAGES[getNumberOfDay() - 1];

    class Background extends React.Component {
        render() {
            return (
                    <Confetti
                        style={{
                            backgroundImage:`url(${path.join(process.env.PUBLIC_URL, image.src)})`,
                            opacity: 0.5,
                            backgroundAttachment: 'scroll',
                            backgroundRepeat: 'no-repeat',
                            backgroundPosition: '0% 0%',
                            backgroundSize: '100% 100%',
                            height: '100vh',
                        }}
                        width={width}
                        height={height}
                    />
            )
        }
    }
    return (
            <Background/>
        );
}

export default Background;