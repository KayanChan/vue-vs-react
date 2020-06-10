import React, { useState, useCallback } from "react"
import moment from 'moment'
import { Row, Col, Breadcrumb, Input, Table, Space, Pagination } from "antd"
import { SearchOutlined, PlusSquareOutlined, DownloadOutlined, EditOutlined, HomeOutlined, IdcardOutlined, CloseSquareOutlined } from '@ant-design/icons'
import CreateSchoolModal from './CreateSchoolModal'
/* 数据 */
const dateFormat = 'YYYY/MM/DD'
const dataSource = [
  {
    key: '1',
    school: '福州市钱塘小学',
    accountNumber: 100,
    createdAt: +new Date(),
    limitedAt: +new Date('2020-12-31'),
    status: '正常使用'
  },
  {
    key: '2',
    school: '福州市实验小学',
    accountNumber: 300,
    createdAt: +new Date(),
    limitedAt: +new Date('2020-12-31'),
    status: '正常使用'
  }
]
const columns = [
  {
    title: '学校',
    dataIndex: 'school',
    key: 'school',
  },
  {
    title: '账号数量',
    dataIndex: 'accountNumber',
    key: 'accountNumber',
  },
  {
    title: '创建时间',
    dataIndex: 'createdAt',
    key: 'createdAt',
    render: (createdAt) => {
      return moment(createdAt).format(dateFormat)
    }
  },
  {
    title: '有限期',
    dataIndex: 'limitedAt',
    key: 'limitedAt',
    render: (limitedAt) => {
      return moment(limitedAt).format(dateFormat)
    }
  },
  {
    title: '状态',
    dataIndex: 'status',
    key: 'status',
  },
  {
    title: '操作',
    key: 'action',
    render: () => {
      return (<Space size="middle">
        <EditOutlined />
        <HomeOutlined />
        <IdcardOutlined />
        <CloseSquareOutlined />
      </Space>)
    }
  }

]

/* 组件块 */
const BreadCrumb = () => (
  <Breadcrumb style={{lineHeight: '40px'}}>
    <Breadcrumb.Item>安全管理</Breadcrumb.Item>
    <Breadcrumb.Item>学校管理</Breadcrumb.Item>
  </Breadcrumb>
)
const SearchInput = () => (
  <div style={{width: '200px'}}>
    <Input
      placeholder="搜素"
      prefix={<SearchOutlined />} />
  </div>
)

/* 当前组件 */
const SchoolManage = () => {
  const [isOpenCreateSchoolModal, toggleOpenCreateSchoolModal] = useState(true)
  const openCreateSchoolModal = useCallback(() => {
    console.log('打开创建学校的弹窗')
    toggleOpenCreateSchoolModal(true)
  }, [])
  const createSchool = useCallback((data) => {
    const {
      province,
      city,
      district,
      schoolName,
      schoolAddress,
      limitedPeriod,
      accountNumber
    } = data
    console.log(
      province,
      city,
      district,
      schoolName,
      schoolAddress,
      limitedPeriod,
      accountNumber
    )
    console.log('保存-创建学校')
    toggleOpenCreateSchoolModal(false)
  }, [])

  const cancelCreateSchool = useCallback(() => {
    console.log('取消-创建学校')
    toggleOpenCreateSchoolModal(false)
  }, [])

  return (
    <>
      <BreadCrumb />
      <div style={{boxShadow: '2px 2px 10px #b3b3b3', borderRadius: '8px', padding: '10px'}}>
        <Row>
          <Col span={12}>
            <SearchInput />
          </Col>
          <Col span={12} style={{textAlign: 'right', lineHeight: '32px'}}>
            <span style={{marginLeft: '20px', cursor: 'pointer'}} onClick={openCreateSchoolModal}><PlusSquareOutlined /> 创建学校</span>
            <span style={{marginLeft: '20px', cursor: 'pointer'}}><DownloadOutlined /> 导入学校</span>
          </Col>
        </Row>
        <Table dataSource={dataSource} columns={columns} />
        <div style={{textAlign: 'center'}}>
          <Pagination
            total={85}
            hideOnSinglePage={false}
            showSizeChanger
            showQuickJumper
            showTotal={total => `共 ${total} 条`}
          />
        </div>
      </div>
      <CreateSchoolModal visible={isOpenCreateSchoolModal} onHandleOk={createSchool} onHandleCancel={cancelCreateSchool}/>
    </>
  )
}

export default SchoolManage
