import React from 'react';
import { Button, Divider } from 'antd';
import { RollbackOutlined, SaveOutlined } from '@ant-design/icons';

const FormSubmit = ({ goBack, saveAndClose, disabled, content, icon, contentSaveAndClose }) => {
  return (
    <div>
      <Divider />
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', marginTop: '10px' }}>
        {goBack && (
          <Button className="" icon={<RollbackOutlined />} onClick={goBack}>
            Quay lại
          </Button>
        )}
        <Button
          className="btn-custom"
          icon={icon ? icon : <SaveOutlined />}
          type="primary"
          htmlType={'submit'}
          disabled={disabled}
        >
          {content && content.length > 0 ? content : 'Lưu'}
        </Button>
        {saveAndClose && (
          <Button
            className="btn-custom"
            icon={icon ? icon : <SaveOutlined />}
            type="primary"
            onClick={() => saveAndClose(true)}
            disabled={disabled}
          >
            {contentSaveAndClose ? contentSaveAndClose : content ? content + ' và thoát' : 'Lưu và thoát'}
          </Button>
        )}
      </div>
    </div>
  );
};

FormSubmit.defaultProps = {
  loading: false,
};

export default FormSubmit;
