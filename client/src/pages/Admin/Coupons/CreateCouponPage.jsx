import { Button, Form, Input, InputNumber, Spin, message } from "antd";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const CreateCouponPage = () => {
  const [loading, setLoading] = useState(false);
  const [form] = Form.useForm();
  const navigate = useNavigate();
  const apiUrl = import.meta.env.VITE_API_BASE_URL;

  const onFinish = async (values) => {
    setLoading(true);
    try {
      const response = await fetch(`${apiUrl}/api/coupons`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });

      if (response.ok) {
        message.success("Kupon başarıyla oluşturuldu.");
        form.resetFields();
        navigate("/admin/coupons");
      } else {
        message.error("Kupon oluşturulurken bir hata oluştu.");
      }
    } catch (error) {
      console.log("Kupon oluşturma hatası:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Spin spinning={loading}>
      <Form name="basic" layout="vertical" onFinish={onFinish} form={form}>
        <Form.Item
          label="Kupon Kodu"
          name="code"
          rules={[
            {
              required: true,
              message: "Bir kupon kodu giriniz",
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Kupon İndirim Oranı"
          name="discountPercent"
          rules={[
            {
              required: true,
              message: "Bir kupon indirim oranı giriniz",
            },
          ]}
        >
          <InputNumber />
        </Form.Item>

        <Button type="primary" htmlType="submit">
          Oluştur
        </Button>
      </Form>
    </Spin>
  );
};

export default CreateCouponPage;
