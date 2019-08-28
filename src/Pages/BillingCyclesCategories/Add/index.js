import React, { useState, useEffect } from "react";
import { Container } from "./styles";
import Breadcrumbs from "Components/Breadcrumbs";
import Title from "Components/Title";
import Input from "Components/Input";
import Button from "Components/Button";
import Services from "Services";
import { toast } from "react-toastify";
import Select from "Components/Select";
import { history } from "Config/Store";

export default function BillingCyclesCategoriesAdd() {
  const [name, setName] = useState("");
  const [billing_cycles_type_id, setBillingCyclesTypeId] = useState("");
  const [billingCyclesTypes, setBillingCyclesTypes] = useState({
    total: 0,
    perPage: 20,
    page: 1,
    lastPage: 1,
    data: []
  });

  useEffect(() => {
    _getAllBillingCyclesTypes();
  }, []);

  async function _getAllBillingCyclesTypes(params: Object = {}) {
    try {
      const response = await Services.billingCyclesTypes.getAllBillingCyclesTypes(params);
      if (response.status === 200) {
        setBillingCyclesTypes(response.data.data.map(item => ({ label: item.name, value: item.id })));
      }
    } catch (e) {
      console.log("_getAllBillingCyclesTypes/ERROR", e.message);
    }
  }

  async function _save() {
    try {
      const response = await Services.billingCyclesCategories.storeBillingCyclesCategories({
        billing_cycles_type_id,
        name
      });
      if (response.status === 200) {
        toast.success("Nova categoria de faturamento cadastrada com sucesso");

        history.push("/billing-cycles-categories");
      }
    } catch (e) {
      console.log("_save/ERROR", e.message);
    }
  }

  return (
    <Container>
      <Breadcrumbs
        data={[
          { label: "Dashboard", href: "/dashboard" },
          {
            label: "Categorias de Faturamento",
            href: "/billing-cycles-categories"
          },
          { label: "Adicionar" }
        ]}
      />
      <Title>Nova Categoria de Faturamento</Title>

      <Select
        isSearchable
        label="Tipo"
        placeholder="Selecione um tipo de faturamento"
        options={billingCyclesTypes}
        onChange={option => setBillingCyclesTypeId(option.value)}
      />

      <Input value={name} onChange={e => setName(e.target.value)} placeholder="Nome" autoComplete="off" />
      <Button label="Salvar" icon="check" allowSpinnerLoading={true} onClick={_save} />
    </Container>
  );
}