import React, {useState, useCallback} from 'react'
import PropTypes from 'prop-types'
import { Modal, Row, Col, Input, DatePicker } from 'antd'
import ProvinceCityDistrictSelect from './ProvinceCityDistrictSelect'
import IntegerInput from './IntegerInput'

const dateFormat = 'YYYY/MM/DD'
const CreateSchoolModal = ({visible, onHandleOk, onHandleCancel}) => {
  const [province, setProvince] = useState('01')
  const [city, setCity] = useState('03')
  const [district, setDistrict] = useState('05')
  const [schoolName, setSchoolName] = useState('广州市天河区实验中学')
  const [schoolAddress, setSchollAddress] = useState('广州市天河区珠江新城')
  const [limitedPeriod, setLimitedPeriod] = useState('')
  const [accountNumber, setAccountNumber] = useState(100)
  const provinceChange = useCallback(value => setProvince(value), [])
  const cityChange = useCallback(value => setCity(value), [])
  const districtChange = useCallback(value => setDistrict(value), [])
  const schoolNameChange = useCallback((e) => setSchoolName(e.target.value), [])
  const schoolAddressChange = useCallback((e) => setSchollAddress(e.target.value), [])
  const limitedPeriodChange = useCallback((date, dateString) => setLimitedPeriod(dateString), [])
  const accountNumberChange = useCallback((value) => setAccountNumber(value), [])
  const resetModal = useCallback(() => {
    console.log('弹窗关闭')
    setProvince('')
    setCity('')
    setDistrict('')
    setSchoolName('')
    setSchollAddress('')
    setLimitedPeriod('')
    setAccountNumber('')
  }, [])

  const onOk = () => {
    onHandleOk({
      province,
      city,
      district,
      schoolName,
      schoolAddress,
      limitedPeriod,
      accountNumber
    })
  }

  return (
    <Modal
      title="创建学校"
      visible={visible}
      okText="保存"
      cancelText="取消"
      onOk={onOk}
      onCancel={onHandleCancel}
      afterClose={resetModal}
    >
      <Row style={{marginBottom: '10px'}}>
        <Col span={4}>省市区选择</Col>
        <Col span={20}>
          <ProvinceCityDistrictSelect 
            province={province}
            provinces={[
              {id: '01', name: '广东省'},
              {id: '02', name: '广西省'}
            ]}
            onProvinceChange={provinceChange}
            city={city}
            cities={[
              {id: '03', name: '广州市'},
              {id: '04', name: '珠海市'}
            ]}
            onCityChange={cityChange}
            district={district}
            districts={[
              {id: '05', name: '天河区'},
              {id: '06', name: '越秀区'}
            ]}
            onDistrictChange={districtChange}
          />
        </Col>
      </Row>
      <Row style={{marginBottom: '10px'}}>
        <Col span={4}>学校名称</Col>
        <Col span={20}>
          <Input value={schoolName} onChange={schoolNameChange}/>
        </Col>
      </Row>
      <Row style={{marginBottom: '10px'}}>
        <Col span={4}>学校地址</Col>
        <Col span={20}>
          <Input value={schoolAddress} onChange={schoolAddressChange}/>
        </Col>
      </Row>
      <Row style={{marginBottom: '10px'}}>
        <Col span={4}>有效期</Col>
        <Col span={20}>
          <DatePicker format={dateFormat} onChange={limitedPeriodChange}/>
        </Col>
      </Row>
      <Row>
        <Col span={4}>账号数量</Col>
        <Col span={20}>
          <IntegerInput value={accountNumber} onHandleChange={accountNumberChange}/>
        </Col>
      </Row>
    </Modal>
  )
}

CreateSchoolModal.defaultProps = {
  visible: false
}
CreateSchoolModal.propTypes = {
  /**
   * 是否可见
   */
  visible: PropTypes.bool,
  /**
   * 点击确定回调
   */
  handleOk: PropTypes.func,
  /**
   * 点击遮罩层或右上角叉或取消按钮的回调
   */
  handleCancel: PropTypes.func
}
export default CreateSchoolModal