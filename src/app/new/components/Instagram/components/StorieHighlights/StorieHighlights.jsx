'use client'
import React from 'react'
import { StorieHighlightsContainer, StorieHighlightsImageContainer } from './styles'

const StorieHighlights = () => {
  return (
    <StorieHighlightsContainer>
			<StorieHighlightsImageContainer>
				<img 
					style={{
                        borderRadius: "50%",
                        width: "80px"
                    }} 
					src="https://images.unsplash.com/photo-1513721032312-6a18a42c8763?w=152&h=152&fit=crop&crop=faces" 
					alt=""
				/>
			</StorieHighlightsImageContainer>
            <StorieHighlightsImageContainer>
                <img 
					style={{
                        borderRadius: "50%",
                        width: "80px"
                    }} 
					src="https://images.unsplash.com/photo-1513721032312-6a18a42c8763?w=152&h=152&fit=crop&crop=faces" 
					alt=""
				/>
			</StorieHighlightsImageContainer>
            <StorieHighlightsImageContainer>
                <img 
					style={{
                        borderRadius: "50%",
                        width: "80px"
                    }} 
					src="https://images.unsplash.com/photo-1513721032312-6a18a42c8763?w=152&h=152&fit=crop&crop=faces" 
					alt=""
				/>
			</StorieHighlightsImageContainer>
		</StorieHighlightsContainer>
  )
}

export default StorieHighlights