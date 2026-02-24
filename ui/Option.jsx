'use client'

import dynamic from 'next/dynamic';

const Select = dynamic(() => import('react-select'), {
  ssr: false,
});

export default function Option({disabeltitle,data,setData,name,placeholder,title,options=[],disabeld=false}) {

    return (
        <div className="space-y-6">
        {/* School Selector */}
        <div>
          <label className="block text-neutral-700 mb-2">
            {title}
          </label>
          <Select
          
          loadingMessage={()=>'درحال بارگذاری اطلاعات لطفا منتظر بمانید...'}
          isDisabled={disabeld}
          isLoading={!options||!options.length>0}
            options={options}
           value={options&&options.length>0?options.find(option => option.value === data[name]) || null:null}
            onChange={(selected) => setData((prev)=>({...prev,[name]:selected.value}))}
            placeholder={disabeld?disabeltitle:placeholder}
            isSearchable
            
            styles={{
              
             loadingMessage: (base) => ({
  ...base,
  fontSize: window.innerWidth < 640 ? '12px' : '14px',
  whiteSpace: 'nowrap',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
}),
              control: (base, state) => ({
                ...base,
                borderColor: state.isFocused ? '#3b82f6' : '#e5e7eb',
                borderRadius: '0.5rem',
                padding: '0.25rem',
                boxShadow: state.isFocused ? '0 0 0 2px rgba(59, 130, 246, 0.1)' : 'none',
                '&:hover': {
                  borderColor: '#3b82f6',
                },
              }),
              option: (base, state) => ({
                ...base,
                backgroundColor: state.isFocused ? '#eff6ff' : 'white',
                color: '#1f2937',
                cursor: 'pointer',
              }),
              placeholder: (base,state) => ({
                ...base,
                color: '#9ca3af',
                fontSize: window.innerWidth < 640 ? '12px' : '14px',
                  whiteSpace: 'nowrap',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
              }),
            }}
          />
        </div>
        </div>
    );
}