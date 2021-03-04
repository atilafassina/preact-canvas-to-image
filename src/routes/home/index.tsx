import { FunctionalComponent, h } from 'preact';
import { useEffect, useState } from 'preact/hooks'
import style from './style.css';

const createBase = (imageUrl: string): HTMLImageElement => {
    const base = new Image();
    base.src = imageUrl
    base.crossOrigin = 'Anonymous'

    return base
}

const Home: FunctionalComponent = () => {
    const [imageUrl, setImageUrl] = useState('https://placekitten.com/g/270/270')
    const [newImage, setNewImage] = useState('')
    useEffect(() => {
        const canvas = document.getElementById('viewport') as HTMLCanvasElement
        const image = createBase(imageUrl)
        const context = canvas.getContext('2d') as CanvasRenderingContext2D
        image.onload = (): void => {
            context?.drawImage(image, 0, 0)
            context.font = "bold 48px serif';"
            context?.fillText('Full StackSocial', 10, 50);
        }
    }, [imageUrl])


    return (
        <div class={style.home}>
            <div class={style.wrapper}>
                <input class={style.input} type="text" value={imageUrl} onChange={(evt): void => {setImageUrl(evt.currentTarget.value)}} />
                <canvas id="viewport" width="270" height="270" class={style.canvas} />
                <button onClick={(): void => {
                    const canvas = document.getElementById('viewport') as HTMLCanvasElement
                    setNewImage(canvas.toDataURL())
                    }}>get image</button>
            </div>
            {newImage && <div>
                <img src={newImage} />
            </div>}
        </div>
    );
};

export default Home;
