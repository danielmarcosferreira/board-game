import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; // Replace useHistory with useNavigate
import dayjs from 'dayjs';

import PageContainer from '../components/PageContainer';
import Loading from '../components/Loading';
import Table from '../components/Table';

import Button from '../components/Form/Button';

import * as api from '../services/api/customers';

export default function Customers() {
    const [customers, setCustomers] = useState(null);
    const navigate = useNavigate(); // Replace useHistory with useNavigate

    useEffect(() => {
        api.list().then(customers => {
            setCustomers(customers);
        });
    }, []);

    if (!customers) return <Loading />;

    return (
        <PageContainer title="Clientes">
            <Table
                columns={[
                    { title: 'Nome', accessor: 'name' },
                    { title: 'Telefone', accessor: 'phone' },
                    { title: 'Aniversário', accessor: 'birthday' },
                    { title: 'CPF', accessor: 'cpf' },
                ]}

                content={customers}

                onCellClick={{
                    name: row => navigate(`/customers/${row.id}`) // Use navigate instead of history.push
                }}

                formatCellText={{
                    'birthday': birthday => dayjs(birthday).format('DD/MM/YYYY'),
                    'phone': phone => phone.length === 11
                        ? phone.replace(/^(\d{2})(\d{5})(\d{4})$/, '($1) $2-$3')
                        : phone.replace(/^(\d{2})(\d{4})(\d{4})$/, '($1) $2-$3'),
                    'cpf': cpf => cpf.replace(/^(\d{3})(\d{3})(\d{3})(\d{2})$/, '$1.$2.$3-$4')
                }}
            />

            <Button onClick={() => navigate('/customers/new')}>Adicionar Cliente</Button> {/* Use navigate */}
        </PageContainer>
    );
}