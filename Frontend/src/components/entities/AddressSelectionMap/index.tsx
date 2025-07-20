/* eslint-disable no-return-assign */

'use client'

import React, { useState, useCallback, useEffect } from 'react'
import KeyboardBackspaceRoundedIcon from '@mui/icons-material/KeyboardBackspaceRounded'
import { Box } from '@mui/material'
import {
  GoogleMap,
  Marker,
  Autocomplete,
  useLoadScript,
} from '@react-google-maps/api'
import { useFormContext } from 'react-hook-form'
import { CommonInput, Loader } from '@components/common'
import { getStyles } from '@utils/styles'
import defaultStyles from './styles'

enum ADDRESS_SELECTION_VIEW {
  SEARCH = 1,
  MAP = 2,
}

type AddressSelectionProps = {
  setNextButtonState: (flag: boolean) => void
}

export function AddressSelectionMap({
  setNextButtonState,
}: AddressSelectionProps) {
  const [view, setView] = useState(ADDRESS_SELECTION_VIEW.SEARCH)
  const [location, setLocation] = useState({ lat: 0, lng: 0 })
  const styles = getStyles(defaultStyles)
  const { setValue } = useFormContext()
  const [address, setAddress] = useState<string | undefined>('')

  const handlePlaceSelect = (autocomplete: google.maps.places.Autocomplete) => {
    const place = autocomplete.getPlace()
    // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
    if (place && place.geometry) {
      setAddress(place.formatted_address)
      if (place.geometry.location)
        setLocation({
          lat: place.geometry.location.lat(),
          lng: place.geometry.location.lng(),
        })
      setView(ADDRESS_SELECTION_VIEW.MAP)
      setNextButtonState(true)
    }
  }

  const handleMapClick = useCallback((event: google.maps.MapMouseEvent) => {
    if (event.latLng?.lat() && event.latLng.lng()) {
      const newLocation = {
        lat: event.latLng.lat(),
        lng: event.latLng.lng(),
      }
      setLocation(newLocation)
    }
  }, [])

  const handleMarkerDragEnd = (event: google.maps.MapMouseEvent) => {
    if (event.latLng?.lat() && event.latLng.lng()) {
      const newLocation = {
        lat: event.latLng.lat(),
        lng: event.latLng.lng(),
      }
      setLocation(newLocation)
    }
  }

  useEffect(() => {
    setValue('lat', location.lat)
    setValue('lng', location.lng)
  }, [location])

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY as string,
    libraries: ['places'],
  })

  if (!isLoaded) return <Loader loading={!isLoaded} />
  return (
    <Box>
      {view === ADDRESS_SELECTION_VIEW.SEARCH && (
        <Box {...styles('firstViewWrapper')}>
          <Autocomplete
            onLoad={(autocomplete) => (window.autocomplete = autocomplete)}
            onPlaceChanged={() => handlePlaceSelect(window.autocomplete)}
          >
            <CommonInput
              name="address"
              placeholder="Search for Area, Street Name"
              label="Select Address"
              customStyles={{
                wrapper: styles('searchInputWrapper').sx,
                input: styles('searchInput').sx,
              }}
              onKeyDown={(e) => {
                if (e.key === 'Enter') {
                  e.preventDefault()
                  e.stopPropagation()
                }
              }}
            />
          </Autocomplete>
        </Box>
      )}

      {view === ADDRESS_SELECTION_VIEW.MAP && (
        <Box {...styles('mapContainer')}>
          <GoogleMap
            mapContainerStyle={{ width: '100%', height: '350px' }}
            center={location}
            zoom={18}
            onClick={handleMapClick}
          >
            <Marker
              position={location}
              draggable
              onDragEnd={handleMarkerDragEnd}
            />
          </GoogleMap>
          <Box {...styles('infoWrapper')}>
            <KeyboardBackspaceRoundedIcon
              onClick={() => setView(ADDRESS_SELECTION_VIEW.SEARCH)}
              {...styles('backIcon')}
            />
            {address}
          </Box>
        </Box>
      )}
    </Box>
  )
}
