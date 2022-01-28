import React from 'react';
import styled from 'styled-components';

// let url = "https://suggestions.dadata.ru/suggestions/api/4_1/rs/suggest/fias";
// let token = "c9c05dca386e00712a785b607a77150bfab5ff27";
// let query = "Пет";

function Registration() {

    // fetch(url, {
    //     method: "POST",
    //     mode: "cors",
    //     headers: {
    //         "Content-Type": "application/json",
    //         "Accept": "application/json",
    //         "Authorization": "Token " + token
    //     },
    //     body: JSON.stringify({
    //         "query": "Пет",
    //         "from_bound": { "value": "city" },
    //         "to_bound": { "value": "city" }
    //     })
    // }).then(response => response.json())
    //     .then(json => json.suggestions)
    //     .then(json => {
    //         for (let key in json) {
    //             let cityOption = document.createElement("option");
    //             let citySelect = document.getElementById("citySelect");

    //             cityOption.innerHTML = key;
    //             citySelect.appendChild(cityOption);
    //         };
    //         console.log(json);
    //     })
    //     .catch(error => console.log("error", error));

    
   
   

    return (
        <Container>
            <RegContainer>
                <h1>Регистрация</h1>
                <FormGroup id="formGroup">
                    <NameInput>
                        <label for="nameInput">Ф.И.О</label>
                        <input type="text" name="name" id="nameInput" required placeholder="Имя Фамилия Отчество"></input>
                    </NameInput>
                    <EmailInput>
                        <label for="emailInput">Email</label>
                        <input type="text" name="email" id="emailInput" required placeholder="вашапочта@gmail.com"></input>
                    </EmailInput>
                    <GenderSelect>
                        <label for="genderSelect">Пол</label>
                        <select name="gender" id="genderSelect" required>
                            <option value="" disabled selected defaultValue>Выберите пол</option>
                            <option value="female">Женский</option>
                            <option value="male">Мужской</option>
                            <option value="other">Другое</option>
                        </select>
                    </GenderSelect>
                    <BirthdayInput>
                        <label for="bDayInput">Дата Рождения</label>
                        <input type="date" name="Bday" id="bDayInput" required />
                    </BirthdayInput>
                    <CitySelect>
                        <label for="citySelect">Город</label>
                        <select name="city" id="citySelect" required>
                            <option value="" disabled selected defaultValue>Выберите Ваш город</option>
                            <option value="Moscow">Москва</option>
                        </select>
                    </CitySelect>
                    <SubmitButton type="submit" id="submitBtn">Регистрация</SubmitButton>
                </FormGroup>
            </RegContainer>
        </Container>
    );
};

const Container = styled.div`
min-height: calc(100vh - 80px);
position: relative;
display: flex;
align-items: top;
justify-content: center;


&:before{
    position: absolute;
    background-position: top;
    background-size: cover;
    background-repeat: no-repeat;
    content: "";
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    opacity: 0.7;
    background-image: url("/images/registration-background.png");
    z-index: -1;
}
`;

const RegContainer = styled.div`
    border: 2px solid #7fda56;
    border-radius: 30px;
    margin-top: 50px;
    height 550px;
    width: 850px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    h1{
        text-transform: uppercase;
    }
`;

const FormGroup = styled.form`
    width: 80%;
    display: flex;
    justify-content: center;
    flex-direction: column;

    label{
        margin: 0px 10px;
    }

    input,select{
        margin: 5px 0px;
    }

`;

const NameInput = styled.div`

    input{
        width: 100%;
        border-radius: 7px;
        border: 3px solid 7d7d7d;
        height: 30px;
        background-color: #aaadb0;
        color: black;
        transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
    

        &:hover{
            border: 2px solid #7fda56;
        }
    }

`;

const EmailInput = styled(NameInput)``;

const GenderSelect = styled.div`
    select{
        width: 100%;
        border-radius: 7px;
        border: 3px solid 7d7d7d;
        height: 30px;
        background-color: #aaadb0;
        transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;

        &:hover{
            border: 2px solid #7fda56;
        }

    }
`;

const SubmitButton = styled.button`
    width: 150px;
    height: 30px;
    border-radius: 10px;
    background-color: #aaadb0;
    color: black;
    margin-top: 10px;
    transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;

    &:hover{
        border: 2px solid #7fda56;
        color: white;
    }
`;

const BirthdayInput = styled(NameInput)``;

const CitySelect = styled(GenderSelect)``;

export default Registration;
