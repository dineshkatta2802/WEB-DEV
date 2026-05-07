import React, { useRef } from 'react';

export default function App(){
    const listRef = useRef(null); // listRef = {current : null}

    const scrollToIndex = (index) => {
        const listNode = listRef.current;
        const imgNode = listNode.querySelectorAll('li > img')[index];
        imgNode.scrollIntoView({
            behavior : 'smooth',
            block : 'nearest',
            inline : 'center'
        });
    }

    return(
        <>
            <nav>
                <button onClick={() => scrollToIndex(0)}>Img-1</button>
                <button onClick={() => scrollToIndex(1)}>Img-2</button>
                <button onClick={() => scrollToIndex(2)}>Img-3</button>
                <button onClick={() => scrollToIndex(3)}>Img-4</button>
                <button onClick={() => scrollToIndex(4)}>Img-5</button>
                <button onClick={() => scrollToIndex(5)}>Img-6</button>
                <button onClick={() => scrollToIndex(6)}>Img-7</button>
                <button onClick={() => scrollToIndex(7)}>Img-8</button>
                <button onClick={() => scrollToIndex(8)}>Img-9</button>
            </nav>

            <div>
                <ul ref={listRef} style={{display : 'flex', flexDirection : 'row', gap : '1rem', listStyle : 'none'}}>
                    <li><img style={{width : '200px', height : '200px', objectFit : 'cover'}} src="https://i.pinimg.com/736x/9f/5b/ed/9f5bed947874f7a3fc3bf82c40ad7e63.jpg" alt="Img-1" /></li>
                    <li><img style={{width : '200px', height : '200px', objectFit : 'cover'}} src="https://i.pinimg.com/736x/d6/eb/2f/d6eb2fc8783151909415509b8ebe2648.jpg" alt="Img-2" /></li>
                    <li><img style={{width : '200px', height : '200px', objectFit : 'cover'}} src="https://i.pinimg.com/736x/7c/ec/36/7cec36d56a854986762433f13613bd10.jpg" alt="Img-3" /></li>
                    <li><img style={{width : '200px', height : '200px', objectFit : 'cover'}} src="https://i.pinimg.com/736x/9f/5b/ed/9f5bed947874f7a3fc3bf82c40ad7e63.jpg" alt="Img-1" /></li>
                    <li><img style={{width : '200px', height : '200px', objectFit : 'cover'}} src="https://i.pinimg.com/736x/d6/eb/2f/d6eb2fc8783151909415509b8ebe2648.jpg" alt="Img-2" /></li>
                    <li><img style={{width : '200px', height : '200px', objectFit : 'cover'}} src="https://i.pinimg.com/736x/7c/ec/36/7cec36d56a854986762433f13613bd10.jpg" alt="Img-3" /></li>
                    <li><img style={{width : '200px', height : '200px', objectFit : 'cover'}} src="https://i.pinimg.com/736x/9f/5b/ed/9f5bed947874f7a3fc3bf82c40ad7e63.jpg" alt="Img-1" /></li>
                    <li><img style={{width : '200px', height : '200px', objectFit : 'cover'}} src="https://i.pinimg.com/736x/d6/eb/2f/d6eb2fc8783151909415509b8ebe2648.jpg" alt="Img-2" /></li>
                    <li><img style={{width : '200px', height : '200px', objectFit : 'cover'}} src="https://i.pinimg.com/736x/7c/ec/36/7cec36d56a854986762433f13613bd10.jpg" alt="Img-3" /></li>
                </ul>
            </div>
        </>
    );
}