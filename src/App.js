import React from 'react';
import "./_sass/general.module.scss";
import css from "./App.module.scss";
import UserCard from "./UserCard";
import UserImage from "./UserCard/user.png";
import Input from "./Input";
import Radio from "./Radio";

function App() {
    const [value, setValue] = React.useState(null);
    const [radio, setRadio] = React.useState("");

    return (
        <>
            <h1>Hello world!</h1>

            <h2>Heading 2</h2>

            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad dignissimos doloremque doloribus
                exercitationem maiores odit, quas rerum sed ullam! Beatae, delectus facere illum ipsam porro quae
                voluptatum! Adipisci architecto assumenda beatae blanditiis distinctio doloribus ex facilis hic in,
                ipsam ipsum, maxime modi mollitia nobis nostrum obcaecati odio officiis praesentium provident recusandae
                reprehenderit repudiandae sint sit tenetur totam ut voluptates, voluptatum? Animi eligendi hic neque
                quas reiciendis. Atque beatae magnam quidem! Adipisci error eum ex illum ipsam, itaque labore minus modi
                neque odit, officiis provident quod tempore vel voluptatem? Aliquam excepturi fugit nihil. Aliquam
                distinctio officiis quas qui quis sapiente velit?</p>

            <div>
                <a href="#test">Link</a>
            </div>

            <div>
                <button className={css.button}>
                    Primary
                </button>
            </div>

            <div>
                <button
                    className={css.button}
                    disabled
                >
                    Disabled
                </button>
            </div>

            <div>
                <button
                    className={css.flatBtn}
                    disabled
                >
                    Sing up now
                </button>
            </div>

            <UserCard
                image={UserImage}
                name={"Adolph Blaine Charles David Earl Matthew Matthew"}
                position={"Contextual advertising specialist"}
                email={"adolph.blainecharles@gmail.com"}
                phone={"+380 50 678 03 24"}
            />

            <div className={css.grid}>
                <div>1</div>
                <div>1</div>
                <div>1</div>
                <div>1</div>
                <div>1</div>
                <div>1</div>
                <div>1</div>
                <div>1</div>
                <div>1</div>
                <div>1</div>
                <div>1</div>
                <div>1</div>
                <div>1</div>
            </div>

            <Input
                name={"test"}
                value={value}
                label={"Label"}
                placeholder={"Placeholder"}
                changeValue={({target: {value}}) => setValue(value)}
                message={"Enter phone number in open format"}
            />

            <Input
                name={"test"}
                value={value}
                label={"Label"}
                placeholder={"Placeholder"}
                changeValue={({target: {value}}) => setValue(value)}
                error={true}
                message={"Error"}
            />

            <Input
                name={"test"}
                value={value}
                label={"Label"}
                placeholder={"Placeholder"}
                // changeValue={({target: {value}}) => setValue(value)}
                isDisabled={true}
            />

            <Radio
                name="test"
                label="Checked"
                value="opt1"
                selected={radio}
                handleSelect={e => setRadio(e.target.value)}
            />

            <Radio
                name="test"
                label="Checked1"
                value="opt2"
                selected={radio}
                handleSelect={e => setRadio(e.target.value)}
            />

            <Radio
                name="test"
                label="Checked2"
                value="opt3"
                selected={radio}
                handleSelect={e => setRadio(e.target.value)}
            />
        </>
    );
}

export default App;
