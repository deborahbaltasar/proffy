import React, {useState, useEffect, FormEvent} from 'react';
import { Link } from 'react-router-dom';

import PageHeader from '../../components/PageHeader';
import TeacherItem, {Teacher} from '../../components/TeacherItem';
import Input from '../../components/Input';
import Select from '../../components/Select';

import API from '../../services/api';

import './styles.css';

function TeacherList() {
    const [teachers, setTeachers] = useState([]);

    const [ subject, setSubject] = useState('');
    const [ week_day , setWeek_day] = useState('');
    const [ time, setTime] = useState('');

    async function searchTeachers(e: FormEvent) {
        e.preventDefault();

        const res = await API.get('classes', {
            params: {
                subject,
                week_day,
                time,
            }
        })

        setTeachers(res.data)
    }

    return (
        <div id="page-teacher-list" className="container">
            <PageHeader title="Esses são os proffys disponíveis.">
                <form id="search-teachers" onSubmit={searchTeachers}>
                    <Select 
                        name="subject"
                        value={subject}
                        onChange={(e) => {setSubject(e.target.value)}} 
                        label="Matéria"
                        options={[
                            { value: 'Artes', label: 'Artes' },
                            { value: 'Biologia', label: 'Biologia' },
                            { value: 'Física', label: 'Física' },
                            { value: 'Geografia', label: 'Geografia' },
                            { value: 'História', label: 'História' },
                            { value: 'Inglês', label: 'Inglês' },
                            { value: 'Matemática', label: 'Matemática' },
                            { value: 'Português', label: 'Português' },
                            { value: 'Química', label: 'Química' },

                        ]}
                    />

                    <Select 
                        name="week_day" 
                        value={week_day} 
                        onChange={(e) => {setWeek_day(e.target.value)}}
                        label="Dia da semana"
                        options={[
                            { value: '0', label: 'Domingo' },
                            { value: '1', label: 'Segunda-feira' },
                            { value: '2', label: 'Terça-feira' },
                            { value: '3', label: 'Quarta-feira' },
                            { value: '4', label: 'Quinta-feira' },
                            { value: '5', label: 'Sexta-feira' },
                            { value: '6', label: 'Sábado' },

                        ]}
                    />


                    <Input 
                        type="time" 
                        name="time" 
                        label="Hora" 
                        value={time}
                        onChange={(e) => {setTime(e.target.value)}} 
                    />

                    <button type="submit">Buscar</button>

                </form>
            </PageHeader>

            <main>
                {teachers.map((teacher: Teacher) => (
                    <TeacherItem key={teacher.id} teacher={teacher}/>
                ))}
            </main>
        </div>
    );
}

export default TeacherList;