import React from 'react'

function Target({value, name, imageURL}) {
  return (
    <div className="relative overflow-hidden bg-gray-200  rounded-lg shadow-lg w-60 md:w-72 dark:bg-gray-900">
        
    <div className="px-4 py-5 sm:p-6">
        <dl>
            <dt className="text-sm font-medium leading-5 text-purple-900  truncate dark:text-gray-200">
                {name}
            </dt>
            <dd className="mt-1 text-3xl font-semibold leading-9 text-purple-700  dark:text-gray-200">
                {value}
            </dd>
        </dl>
    </div>
</div>
  )
}

export default Target