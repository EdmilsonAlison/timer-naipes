import {Play} from "phosphor-react";
import {
    CountDownContainer,
    FormContainer,
    HomeContainer, MinutesAmountInput,
    Separator,
    StartCountdownButton,
    TaskInput
} from "./styles.ts";

export const Home = () => {
    return (
        <HomeContainer>
            <form action="">
                <FormContainer>
                    <label htmlFor="task">Vou trabalhar em </label>
                    <TaskInput id="task" placeholder={"Dê um nome para o seu projeto"} list={'task-suggestions'}/>
                    <datalist 
                        id={'task-suggestions'}
                    >
                        <option value="Project one"></option>
                        <option value="Project two"></option>
                        <option value="Project three"></option>
                    </datalist>
                    <label htmlFor="minutesAmount">Durante</label>
                    <MinutesAmountInput
                        type="number"
                        id="minutesAmount"
                        placeholder={"00"}
                        step={5}
                        min={5}
                        max={60}
                    />
                    <span>minutos</span>
                </FormContainer>


                <CountDownContainer>
                    <span>0</span>
                    <span>0</span>
                    <Separator>:</Separator>
                    <span>0</span>
                    <span>0</span>
                </CountDownContainer>

                <StartCountdownButton disabled type="submit">
                <Play size={24} />
                    Começar
                </StartCountdownButton>
            </form>
        </HomeContainer>
    )
}
