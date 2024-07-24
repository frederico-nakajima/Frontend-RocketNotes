import { Container,Links,Content } from "./styles";

import { Tag } from "../../components/Tag";
import { Header } from "../../components/Header";
import { Button } from "../../components/Button";
import { ButtonText } from "../../components/ButtonText";
import { Section } from "../../components/Section";



export function Details(){



    return(
        <Container>
            <Header/>
            <main>
                <Content>
                    <ButtonText title ="Excluir nota"/>
                    <h1>
                        Introdução ao React
                    </h1>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia eum error soluta ea fuga? Nulla quo libero pariatur, ducimus molestias modi veritatis voluptate quae soluta culpa praesentium aut quos sequi. Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus fuga doloremque unde rerum? Possimus eveniet sapiente mollitia dolor pariatur aliquam reiciendis, odio debitis tempore est veritatis velit tempora ea cupiditate!
                    </p>
                    <Section title = "Links úteis">
                        <Links>
                            <li><a href="#">link 1</a></li>
                            <li><a href="#">link 2</a></li>
                        </Links>
                    </Section>
                    <Section title = "Marcadores">
                    <Tag title = "express"/>
                    <Tag title = "nodejs"/>
                    </Section>
                
                    <Button title = "Voltar"/>
                </Content>
            </main>
        </Container>
    )
}