'use client'
 
import React from 'react'
import experience from '../extras/experience'
import {
  Card,
  CardContent,
} from "@/components/ui/card"
import { Badge } from "@/components/ui/badge";
import { ExternalLink } from "lucide-react";

const Experience = () => {

  return (
    <div className="space-y-6">
      {experience.map((job, index) => (
        <Card 
          key={index} 
          className="group transition-all duration-300 bg-transparent border border-transparent hover:border-slate-700 hover:shadow-lg"
        >
          <CardContent className="p-6">
            <div className="lg:flex gap-6">
              {/* Time Period */}
              <div className="lg:w-48 mb-4 lg:mb-0">
                <p className="text-sm font-medium text-slate-400">
                  {job.period}
                </p>
              </div>

              {/* Main Content */}
              <div className="flex-1 space-y-4">
                <div>
                  <h3 className="text-md font-semibold text-slate-100 tracking-tight">
                    {job.title}
                  </h3>
                  
                  <a 
                    href={job.refer} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-slate-400 hover:text-teal-500 transition-colors"
                  >
                    <span className="text-md font-medium">{job.company}</span>
                    <ExternalLink className="h-4 w-4" />
                  </a>
                </div>

                <p className="text-sm text-slate-300 leading-relaxed">
                  {job.description}
                </p>

                <div className="flex flex-wrap gap-2 pt-2">
                  {job.technologies.map((tech, techIndex) => (
                    <Badge 
                      key={techIndex} 
                      variant="outline" 
                      className="bg-transparent text-xs font-medium p-2 text-slate-100"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>

  )
}

export default Experience