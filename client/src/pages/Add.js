import React from 'react'
import { Form, Button } from 'react-bootstrap'
import { useForm } from '../utils.js'
import { useHistory } from 'react-router-dom'

function Add({ daos, setDaos }) {
  let history = useHistory()
  const addDao = () => {
    const {
      full_name,
      description,
      date_founded,
      date_created,
      category,
      governance_token_name,
      governance_token_symbol,
      dao_structure,
      voting_process,
      TVL,
      tech_stack,
      notes,
      blockchain,
      logo_link,
      headquarters,
      twitter_handle,
      github_organization_handle,
      telegram_handle,
      linkedin_company_name,
      discord_link,
    } = values
    let newDao = {
      id: daos.length + 1,
      full_name,
      description,
      date_founded,
      date_created,
      category,
      governance_token_name,
      governance_token_symbol,
      dao_structure,
      voting_process,
      TVL,
      tech_stack,
      notes,
      blockchain,
      logo_link,
      headquarters,
      social_media: {
        twitter_handle,
        github_organization_handle,
        telegram_handle,
        linkedin_company_name,
        discord_link,
      },
    }
    const updatedDaos = [...daos, newDao]
    setDaos(updatedDaos)
    history.push('/')
  }
  const { onChange, onSubmit, values } = useForm(addDao, {
    full_name: '',
    description: '',
    date_founded: '',
    date_created: '',
    category: '',
    governance_token_name: '',
    governance_token_symbol: '',
    dao_structure: '',
    voting_process: '',
    TVL: 0,
    tech_stack: '',
    notes: '',
    blockchain: '',
    logo_link: '',
    headquarters: '',
    twitter_handle: '',
    github_organization_handle: '',
    telegram_handle: '',
    linkedin_company_name: '',
    discord_link: '',
  })

  return (
    <div className='app-container add'>
      <h1>Add DAO Form</h1>
      <div className='form-container'>
        <Form onSubmit={onSubmit}>
          <div>
            <Form.Group className='full-name'>
              <Form.Label>Full Name</Form.Label>
              <Form.Control
                name='full_name'
                value={values.full_name}
                onChange={onChange}
              ></Form.Control>
            </Form.Group>
            <Form.Group className='category'>
              <Form.Label>Category</Form.Label>
              <Form.Control
                name='category'
                value={values.category}
                onChange={onChange}
              ></Form.Control>
            </Form.Group>
          </div>
          <div>
            <Form.Group className='date-founded'>
              <Form.Label>Date Founded</Form.Label>
              <Form.Control
                name='date_founded'
                value={values.date_founded}
                onChange={onChange}
              ></Form.Control>
            </Form.Group>
            <Form.Group className='date-created'>
              <Form.Label>Date Created</Form.Label>
              <Form.Control
                name='date_created'
                value={values.date_created}
                onChange={onChange}
              ></Form.Control>
            </Form.Group>
            <Form.Group className='governance-token-name'>
              <Form.Label>Governance Token Name</Form.Label>
              <Form.Control
                name='governance_token_name'
                value={values.governance_token_name}
                onChange={onChange}
              ></Form.Control>
            </Form.Group>
          </div>
          <div>
            <Form.Group className='twitter-handle'>
              <Form.Label>Twitter Handle</Form.Label>
              <Form.Control
                name='twitter_handle'
                value={values.twitter_handle}
                onChange={onChange}
              ></Form.Control>
            </Form.Group>
            <Form.Group className='discord-link'>
              <Form.Label>Discord</Form.Label>
              <Form.Control
                name='discord_link'
                value={values.discord_link}
                onChange={onChange}
              ></Form.Control>
            </Form.Group>
            <Form.Group className='logo-link'>
              <Form.Label>Website</Form.Label>
              <Form.Control
                name='logo_link'
                value={values.logo_link}
                onChange={onChange}
              ></Form.Control>
            </Form.Group>
          </div>
          <div>
            <Form.Group className='tvl'>
              <Form.Label>TVL</Form.Label>
              <Form.Control
                name='tvl'
                value={values.tvl}
                onChange={onChange}
              ></Form.Control>
            </Form.Group>

            <Form.Group className='blockchain'>
              <Form.Label>Blockchain</Form.Label>
              <Form.Control
                name='blockchain'
                value={values.blockchain}
                onChange={onChange}
              ></Form.Control>
            </Form.Group>
            <Form.Group className='headquarters'>
              <Form.Label>Headquarters</Form.Label>
              <Form.Control
                name='headquarters'
                value={values.headquarters}
                onChange={onChange}
              ></Form.Control>
            </Form.Group>
          </div>
          <div>
            <Form.Group className='description'>
              <Form.Label>Description</Form.Label>
              <Form.Control
                as='textarea'
                name='description'
                placeholder='Brief Description'
                value={values.description}
                style={{ height: '100px' }}
                onChange={onChange}
              ></Form.Control>
            </Form.Group>
            <Button variant='primary' type='submit'>
              Submit
            </Button>
          </div>
        </Form>
      </div>
    </div>
  )
}

export default Add
