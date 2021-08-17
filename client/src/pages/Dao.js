/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import { Card } from 'react-bootstrap'
function Dao(props) {
  const { location } = props
  const dao = location.state.dao

  function Link(props) {
    return (
      <a rel='noreferrer' target='_blank' href={props.link}>
        <button
          style={{
            color: `${props.color}`,
            backgroundColor: `${props.background}`,
          }}
        >
          {props.name} ↗
        </button>
      </a>
    )
  }
  return (
    <div className='app-container dao'>
      <div
        className='d-flex p-2 align-items-center'
        style={{ cursor: 'pointer' }}
      >
        <img
          onError={(e) => {
            e.target.onerror = null
            e.target.src =
              'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/A_sample_of_the_transparent_rectangle.svg/2560px-A_sample_of_the_transparent_rectangle.svg.png'
          }}
          src={
            dao
              ? dao.img
              : 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/A_sample_of_the_transparent_rectangle.svg/2560px-A_sample_of_the_transparent_rectangle.svg.png'
          }
          style={{ height: '100px', width: '100px', borderRadius: '15px' }}
        />
        <div style={{ width: '100%' }} className='ml-3'>
          <div style={{ width: '100%' }} className='full-name'>
            {dao.full_name}
            {dao.governance_token_name ? `(${dao.governance_token_name})` : ''}
          </div>
        </div>
      </div>
      <div className='details'>
        <Card className='description'>
          <Card.Body>
            <Card.Title>Description</Card.Title>
            <Card.Text>{dao.description}</Card.Text>
          </Card.Body>
        </Card>
        <div style={{ width: '48%' }}>
          <Card className='links'>
            <Card.Body>
              <Card.Title>Links</Card.Title>
              <Card.Text>
                {dao.logo_link && (
                  <Link
                    background={'rgba(124, 100, 252, 0.1)'}
                    color={'var(--main-color)'}
                    name={'Website'}
                    link={dao.logo_link}
                  />
                )}
                {dao.social_media && (
                  <>
                    {dao.social_media.twitter_handle && (
                      <Link
                        background={'rgba(5, 161, 198, 0.1)'}
                        color={'#1DA1F2'}
                        name={'Twitter'}
                        link={`https://twitter.com/${dao.social_media.twitter_handle}/`}
                      />
                    )}
                    {dao.social_media.discord_link && (
                      <Link
                        background={'rgba(124, 100, 252, 0.1)'}
                        color={'#7289DA'}
                        name={'Discord'}
                        link={dao.social_media.discord_link}
                      />
                    )}
                    {dao.social_media.github_organization_handle && (
                      <Link
                        background={'rgba(127, 127, 127, 0.1)'}
                        color={'white'}
                        name={'Github'}
                        link={`https://github.com/${dao.social_media.github_organization_handle}/`}
                      />
                    )}
                  </>
                )}
              </Card.Text>
            </Card.Body>
          </Card>
          <Card className='TVL'>
            <Card.Body>
              <Card.Title>Total Value Locked (TVL)</Card.Title>
              <Card.Text style={{ fontSize: '20px' }}>
                {dao.tvl ? `$${dao.tvl} ${dao.tvl > 1 ? 'b' : 'm'}` : 'N/A'}
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
      </div>
      <div className='token-info'>
        <div className='title'>Token Information</div>
        <Card>
          <Card.Body>
            <div className='token-header'>
              <div className='p-2'>Symbol</div>
              <div className='p-2'>Name</div>
              <div className='p-2'>Blockchain</div>
              <div className='p-2'>Headquarters</div>
              <div className='p-2'>Date Founded</div>
            </div>
            <div className='token'>
              <div className='d-flex p-2 align-items-center'>
                {dao.governance_token_symbol
                  ? dao.governance_token_symbol
                  : 'N/A'}
              </div>
              <div className='d-flex p-2 align-items-center'>
                {dao.full_name ? dao.full_name : 'N/A'}
              </div>
              <div className='d-flex p-2 align-items-center'>
                {dao.blockchain ? dao.blockchain : 'N/A'}
              </div>
              <div className='d-flex p-2 align-items-center'>
                {dao.headquarters ? dao.headquarters : 'N/A'}{' '}
              </div>
              <div className='d-flex p-2 align-items-center'>
                {dao.date_founded ? dao.date_founded : 'N/A'}
              </div>
            </div>
          </Card.Body>
        </Card>
      </div>
    </div>
  )
}

export default Dao
